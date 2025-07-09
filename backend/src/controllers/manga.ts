import MangaModel from "../models/manga";
import mongoose from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#

// ALL manga
const GETAllManga = async (req: Request, res: Response) => {
	try {
		const elements = await MangaModel.find().sort({ title: 1 });
		res.status(200).json({ message: "All manga", elements });
	} catch (err) {
		res.status(500).json({ message: "Error searching manga", error: err });
	}
};

// GET ALL FILTERED manga
const GETFilterManga = async (req: Request, res: Response) => {
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
					filters[field] = { [`$${operator}`] : Number(rawFilters[key]) };
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

		const elements = await MangaModel.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: "All filtered manga", by: { ...req.query }, elements });
	} catch (err) {
		res.status(500).json({ message: "Error searching manga", error: err });
	}
};

// #=========== END GET ===========#

// #============= POST =============#

// ONE manga
const POSTManga = async (req: Request, res: Response) => {
	try {
		const elements = await MangaModel.create({ ...req.body });
		res.status(201).json({ message: "Manga added successfully", elements });
	} catch (err) {
		res.status(500).json({ message: "Error adding manga", error: err });
	}
};

// #=========== END POST ===========#

// #============= DELETE =============#

// ONE manga
const DELETEManga = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid manga id" });
			return;
		}

		const elements = await MangaModel.findByIdAndDelete(req.params.id);

		if (!elements) {
			res.status(404).json({ message: "Manga not found" });
			return;
		} else {
			res.status(200).json({ message: "Manga deleted successfully", elements });
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching manga", error: err });
	}
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHManga = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid manga id" });
			return;
		}

		const elements = await MangaModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!elements) {
			res.status(404).json({ message: "Manga not found" });
			return;
		} else {
			const newelements = await MangaModel.findOne({ _id: req.params.id });
			res.status(200).json({
				message: "Manga modified successfully",
				was: elements,
				now: newelements,
			});
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching manga", error: err });
	}
};

// #=========== END PATCH ===========#

export default {
	GETAllManga,
	GETFilterManga,
	POSTManga,
	DELETEManga,
	PATCHManga,
};
