import GameModel from "../models/games";
import mongoose from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#


// ALL games
const GETAllGame = async (req: Request, res: Response) => {
	try {
		const game = await GameModel.find().sort({ title: 1 });
		res.status(200).json({ message: "All games", game });
	} catch (err) {
		res.status(500).json({ message: "Error searching games", error: err });
	}
};

// ALL FILTERED games
const GETFilteredGame = async (req: Request, res: Response) => {
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

		const games = await GameModel.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: "All filtered games", by: { ...req.query }, games });
	} catch (err) {
		res.status(500).json({ message: "Error searching games", error: err });
	}
};

// #=========== END GET ===========#

// #============= POST =============#

// ONE game
const POSTGame = async (req: Request, res: Response) => {
	try {
		const game = await GameModel.create({ ...req.body });
		res.status(201).json({ message: "Game added successfully", game });
	} catch (err) {
		res.status(500).json({ message: "Error adding game", error: err });
	}
};

// #=========== END POST ===========#

// #============= DELETE =============#

// ONE game
const DELETEGame = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid game id" });
			return;
		}

		const game = await GameModel.findByIdAndDelete(req.params.id);

		if (!game) {
			res.status(404).json({ message: "Game not found" });
			return;
		} else {
			res.status(200).json({ message: "Game deleted successfully", game });
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching game", error: err });
	}
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHGame = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid game id" });
			return;
		}

		const game = await GameModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!game) {
			res.status(404).json({ message: "Game not found" });
			return;
		} else {
			const newgame = await GameModel.findOne({ _id: req.params.id });
			res.status(200).json({
				message: "Game modified successfully",
				was: game,
				now: newgame,
			});
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching game", error: err });
	}
};

// #=========== END PATCH ===========#

export default {
	GETAllGame,
	GETFilteredGame,
	POSTGame,
	DELETEGame,
	PATCHGame,
};
