import SeriesModel from "../models/series";
import mongoose from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#

// ONE series
const GETSeries = async (req: Request, res: Response) => {
	try {
		const series = await SeriesModel.findOne({ title: req.params.name });

		if (!series) {
			res.status(404).json({ message: "Series not found" });
		} else {
			res.status(200).json({ message: "Single series", series });
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching series", error: err });
	}
};

// ALL seriess
const GETAllSeries = async (req: Request, res: Response) => {
	try {
		const series = await SeriesModel.find().sort({ title: 1 });
		res.status(200).json({ message: "All seriess", series });
	} catch (err) {
		res.status(500).json({ message: "Error searching seriess", error: err });
	}
};

// GET ALL FILTERED series
const GETFilterSeries = async (req: Request, res: Response) => {
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

		const series = await SeriesModel.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: "All filtered series", by: { ...req.query }, series });
	} catch (err) {
		res.status(500).json({ message: "Error searching series", error: err });
	}
};

// #=========== END GET ===========#

// #============= POST =============#

// ONE series
const POSTSeries = async (req: Request, res: Response) => {
	try {
		const series = await SeriesModel.create({ ...req.body });
		res.status(201).json({ message: "Series added successfully", series });
	} catch (err) {
		res.status(500).json({ message: "Error adding series", error: err });
	}
};

// #=========== END POST ===========#

// #============= DELETE =============#

// ONE series
const DELETESeries = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid series id" });
			return;
		}

		const series = await SeriesModel.findByIdAndDelete(req.params.id);

		if (!series) {
			res.status(404).json({ message: "Series not found" });
			return;
		} else {
			res.status(200).json({ message: "Series deleted successfully", series });
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching series", error: err });
	}
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHSeries = async (req: Request, res: Response) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: "Invalid series id" });
			return;
		}

		const series = await SeriesModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!series) {
			res.status(404).json({ message: "Series not found" });
			return;
		} else {
			const newseries = await SeriesModel.findOne({ _id: req.params.id });
			res.status(200).json({
				message: "Series modified successfully",
				was: series,
				now: newseries,
			});
		}
	} catch (err) {
		res.status(500).json({ message: "Error searching series", error: err });
	}
};

// #=========== END PATCH ===========#

export default {
	GETAllSeries,
	GETFilterSeries,
	POSTSeries,
	DELETESeries,
	PATCHSeries,
};
