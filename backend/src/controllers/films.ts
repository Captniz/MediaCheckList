import FilmModel from "../models/films";
import mongoose from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#

// ALL films
const GETAllFilm = async (req: Request, res: Response) => {
	try {
		const elements = await FilmModel.find().sort({ title: 1 });
		res.status(200).json({ message: "All films", elements });
	} catch (err) {
		res.status(500).json({ message: "Error searching films", error: err });
	}
};

// GET ALL FILTERED films
const GETFilterFilm = async (req: Request, res: Response) => {
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

			const value = rawFilters[key];
			filters[key] = isNaN(Number(value)) ? value : Number(value);
		}

		const order = sortOrder === "asc" ? 1 : -1;

		const sortOptions: Record<string, 1 | -1> = {
			[sortBy as string]: order,
		};

		const elements = await FilmModel.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: "All filtered films", by: { ...req.query }, elements });
	} catch (err) {
		res.status(500).json({ message: "Error searching films", error: err });
	}
};

// #=========== END GET ===========#

// #============= POST =============#

// ONE film
const POSTFilm = async (req: Request, res: Response) => {
	try {
		const elements = await FilmModel.create({ ...req.body });
		res.status(201).json({ message: "Film added successfully", elements });
	} catch (err) {
		res.status(500).json({ message: "Error adding film", error: err });
	}
};

// #=========== END POST ===========#

// #============= DELETE =============#

// ONE film
const DELETEFilm = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid film id" });
			return;
		}

		const elements = await FilmModel.findByIdAndDelete(req.params.id);

		if (!elements) {
			res.status(404).json({ message: "Film not found" });
			return;
		} else {
			res.status(200).json({ message: "Film deleted successfully", elements });
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching film", error: err });
	}
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHFilm = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid film id" });
			return;
		}

		const elements = await FilmModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!elements) {
			res.status(404).json({ message: "Film not found" });
			return;
		} else {
			const newelements = await FilmModel.findOne({ _id: req.params.id });
			res.status(200).json({
				message: "Film modified successfully",
				was: elements,
				now: newelements,
			});
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching film", error: err });
	}
};

// #=========== END PATCH ===========#

export default {
	GETAllFilm,
	GETFilterFilm,
	POSTFilm,
	DELETEFilm,
	PATCHFilm,
};
