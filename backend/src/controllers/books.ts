import BookModel from "../models/books";
import mongoose from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#

// ALL books
const GETAllBook = async (req: Request, res: Response) => {
	try {
		const books = await BookModel.find().sort({ title: 1 });
		res.status(200).json({ message: "All books", books });
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
			const value = rawFilters[key];
			filters[key] = isNaN(Number(value)) ? value : Number(value);
		}

		const order = sortOrder === "asc" ? 1 : -1;

		const sortOptions: Record<string, 1 | -1> = {
			[sortBy as string]: order,
		};

		const books = await BookModel.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: "All filtered books", by: { ...req.query }, books });
	} catch (err) {
		res.status(500).json({ message: "Error searching books", error: err });
	}
};

// #=========== END GET ===========#

// #============= POST =============#

// ONE book
const POSTBook = async (req: Request, res: Response) => {
	try {
		const book = await BookModel.create({ ...req.body });
		res.status(201).json({ message: "Book added successfully", book });
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

		const book = await BookModel.findByIdAndDelete(req.params.id);

		if (!book) {
			res.status(404).json({ message: "Book not found" });
			return;
		} else {
			res.status(200).json({ message: "Book deleted successfully", book });
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

		const book = await BookModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!book) {
			res.status(404).json({ message: "Book not found" });
			return;
		} else {
			const newbook = await BookModel.findOne({ _id: req.params.id });
			res.status(200).json({
				message: "Book modified successfully",
				was: book,
				now: newbook,
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
