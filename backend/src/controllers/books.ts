import BookModel from "../models/books";
import mongoose from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#

// ALL books
const GETAllBook = async (req: Request, res: Response) => {
	try {
		const elements = await BookModel.find().sort({ title: 1 });
		res.status(200).json({ message: "All books", elements });
	} catch (err) {
		res.status(500).json({ message: "Error searching books", error: err });
	}
};

// GET ALL FILTERED books
const GETFilterBook = async (req: Request, res: Response) => {
	try {
		const { sortBy = "title", sortOrder = "desc", ...rawFilters } = req.query;

		const filters: Record<string, any> = {};

		for (const key in rawFilters) {
			if (key.includes("__")) {
				const [field, operator] = key.split("__");

				if (operator === "in") {
					filters[field] = { $in: String(rawFilters[key]).split(",") };
					continue;
				} else {
					filters[field] = { [`$${operator}`]: Number(rawFilters[key]) };
					continue;
				}
			}

			function toRegex(str: any): RegExp {
				str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
				return new RegExp(str, "i");
			}

			
			const value = rawFilters[key];
			filters[key] = isNaN(Number(value)) ? toRegex(value) : Number(value);
		}

		const order = sortOrder === "asc" ? 1 : -1;

		const sortOptions: Record<string, 1 | -1> = {
			[sortBy as string]: order,
		};

		const elements = await BookModel.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: "All filtered books", by: { ...req.query }, elements });
	} catch (err) {
		res.status(500).json({ message: "Error searching books", error: err });
	}
};

// #=========== END GET ===========#

// #============= POST =============#

// ONE book
const POSTBook = async (req: Request, res: Response) => {
	try {
		const elements = await BookModel.create({ ...req.body });
		res.status(201).json({ message: "Book added successfully", elements });
	} catch (err) {
		res.status(500).json({ message: "Error adding book", error: err });
	}
};

// #=========== END POST ===========#

// #============= DELETE =============#

// ONE book
const DELETEBook = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid book id" });
			return;
		}

		const elements = await BookModel.findByIdAndDelete(req.params.id);

		if (!elements) {
			res.status(404).json({ message: "Book not found" });
			return;
		} else {
			res.status(200).json({ message: "Book deleted successfully", elements });
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching book", error: err });
	}
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHBook = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid book id" });
			return;
		}

		const elements = await BookModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!elements) {
			res.status(404).json({ message: "Book not found" });
			return;
		} else {
			const newelements = await BookModel.findOne({ _id: req.params.id });
			res.status(200).json({
				message: "Book modified successfully",
				was: elements,
				now: newelements,
			});
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching book", error: err });
	}
};

// #=========== END PATCH ===========#

export default {
	GETAllBook,
	POSTBook,
	DELETEBook,
	PATCHBook,
	GETFilterBook,
};
