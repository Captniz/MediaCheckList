import AnimeModel from "../models/anime";
import mongoose from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#

// ALL animes
const GETAllAnime = async (req: Request, res: Response) => {
	try {
		const anime = await AnimeModel.find().sort({ title: 1 });
		res.status(200).json({ message: "All animes", anime });
	} catch (err) {
		res.status(500).json({ message: "Error searching animes", error: err });
	}
};

// GET ALL FILTERED animes
const GETFilterAnime = async (req: Request, res: Response) => {
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

		const animes = await AnimeModel.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: "All filtered animes", by: { ...req.query }, animes });
	} catch (err) {
		res.status(500).json({ message: "Error searching animes", error: err });
	}
};

// #=========== END GET ===========#

// #============= POST =============#

// ONE anime
const POSTAnime = async (req: Request, res: Response) => {
	try {
		const anime = await AnimeModel.create({ ...req.body });
		res.status(201).json({ message: "Anime added successfully", anime });
	} catch (err) {
		res.status(500).json({ message: "Error adding anime", error: err });
	}
};

// #=========== END POST ===========#

// #============= DELETE =============#

// ONE anime
const DELETEAnime = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid anime id" });
			return;
		}

		const anime = await AnimeModel.findByIdAndDelete(req.params.id);

		if (!anime) {
			res.status(404).json({ message: "Anime not found" });
			return;
		} else {
			res.status(200).json({ message: "Anime deleted successfully", anime });
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching anime", error: err });
	}
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHAnime = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid anime id" });
			return;
		}

		const anime = await AnimeModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!anime) {
			res.status(404).json({ message: "Anime not found" });
			return;
		} else {
			const newanime = await AnimeModel.findOne({ _id: req.params.id });
			res.status(200).json({
				message: "Anime modified successfully",
				was: anime,
				now: newanime,
			});
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching anime", error: err });
	}
};

// #=========== END PATCH ===========#

export default {
	GETFilterAnime,
	GETAllAnime,
	POSTAnime,
	DELETEAnime,
	PATCHAnime,
};
