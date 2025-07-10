import SeriesModel from "../models/series";
import { Request, Response } from "express";
import GeneralController from "./_GeneralController";

// #============= GET =============#

const GETAllSeries = (req: Request, res: Response) => {
	return GeneralController.GET_All(SeriesModel, req, res);
};

const GETFilterSeries = async (req: Request, res: Response) => {
	return GeneralController.GET_Filtered(SeriesModel, req, res);
};

// #=========== END GET ===========#

// #============= POST =============#

const POSTSeries = async (req: Request, res: Response) => {
	return GeneralController.POST_Single(SeriesModel, req, res);
};

// #=========== END POST ===========#

// #============= DELETE =============#

const DELETESeries = async (req: Request, res: Response) => {
	return GeneralController.DELETE_Single(SeriesModel, req, res);
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHSeries = async (req: Request, res: Response) => {
	return GeneralController.PATCH_Single(SeriesModel, req, res);
};

// #=========== END PATCH ===========#

export default {
	GETAllSeries,
	POSTSeries,
	DELETESeries,
	PATCHSeries,
	GETFilterSeries,
};
