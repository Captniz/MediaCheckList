import MangaModel from "../models/manga";
import mongoose from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#

// ALL manga
const GETAllManga = async (req: Request, res: Response) => {
	try {
		const manga = await MangaModel.find().sort({ title: 1 });
		res.status(200).json({ message: "All manga", manga });
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
			const value = rawFilters[key];
			filters[key] = isNaN(Number(value)) ? value : Number(value);
		}

		const order = sortOrder === "asc" ? 1 : -1;

		const sortOptions: Record<string, 1 | -1> = {
			[sortBy as string]: order,
		};

		const manga = await MangaModel.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: "All filtered manga", by: { ...req.query }, manga });
	} catch (err) {
		res.status(500).json({ message: "Error searching manga", error: err });
	}
};

// #=========== END GET ===========#

// #============= POST =============#

// ONE manga
const POSTManga = async (req: Request, res: Response) => {
	try {
		const manga = await MangaModel.create({ ...req.body });
		res.status(201).json({ message: "Manga added successfully", manga });
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

		const manga = await MangaModel.findByIdAndDelete(req.params.id);

		if (!manga) {
			res.status(404).json({ message: "Manga not found" });
			return;
		} else {
			res.status(200).json({ message: "Manga deleted successfully", manga });
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

		const manga = await MangaModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!manga) {
			res.status(404).json({ message: "Manga not found" });
			return;
		} else {
			const newmanga = await MangaModel.findOne({ _id: req.params.id });
			res.status(200).json({
				message: "Manga modified successfully",
				was: manga,
				now: newmanga,
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
