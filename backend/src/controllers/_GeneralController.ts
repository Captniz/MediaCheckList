import mongoose, { Model } from "mongoose";
import { Request, Response } from "express";

// #============= GET =============#

// ALL books
async function GET_All<ModelType>(
    model: Model<ModelType>, 
    req: Request, 
    res: Response
) {
	try {
		const elements = await model.find().sort({ title: 1 });
		res.status(200).json({ message: `All ${model.modelName}`, elements });
	} catch (err) {
		res.status(500).json({ message: `Error searching ${model.modelName}`, error: err });
	}
}

// GET ALL FILTERED books
async function GET_Filtered<ModelType>(model: Model<ModelType>,req: Request, res: Response) {
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

		const elements = await model.find(filters).sort(sortOptions);

		res
			.status(200)
			.json({ message: `Filtered ${model.modelName}`, by: { ...req.query }, elements });
	} catch (err) {
		res.status(500).json({ message: `Error searching ${model.modelName}`, error: err });
	}
}

// #=========== END GET ===========#

// #============= POST =============#

// ONE book
async function POST_Single<ModelType> (model: Model<ModelType>,req: Request, res: Response) {
	try {
		const elements = await model.create({ ...req.body });
		res.status(201).json({ message: `${model.modelName} added successfully`, elements });
	} catch (err) {
		res.status(500).json({ message: `Error adding ${model.modelName}`, error: err });
	}
};

// #=========== END POST ===========#

// #============= DELETE =============#

// ONE book
async function DELETE_Single<ModelType>  (model: Model<ModelType>,req: Request, res: Response) {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: `Invalid ${model.modelName} id` });
			return;
		}

		const elements = await model.findByIdAndDelete(req.params.id);

		if (!elements) {
			res.status(404).json({ message: `${model.modelName} not found` });
			return;
		} else {
			res.status(200).json({ message: `${model.modelName} deleted successfully`, elements });
		}
	} catch (err) {
		res.status(500).json({ message: `Error searching ${model.modelName}`, error: err });
	}
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

async function PATCH_Single<ModelType> (model: Model<ModelType>,req: Request, res: Response) {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			res.status(404).json({ message: `Invalid ${model.modelName} id` });
			return;
		}

		const elements = await model.findOneAndUpdate(
			{ _id: req.params.id },
			{ ...req.body }
		);

		if (!elements) {
			res.status(404).json({ message: `${model.modelName} not found` });
			return;
		} else {
			const newelements = await model.findOne({ _id: req.params.id });
			res.status(200).json({
				message: `${model.modelName} modified successfully`,
				was: elements,
				now: newelements,
			});
		}
	} catch (err) {
		res.status(500).json({ message: `Error searching ${model.modelName}`, error: err });
	}
};

// #=========== END PATCH ===========#

export default {
    GET_All,
    GET_Filtered,
    POST_Single,
    DELETE_Single,
    PATCH_Single
};
