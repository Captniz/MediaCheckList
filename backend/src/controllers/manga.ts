import MangaModel from "../models/manga";
import { Request, Response } from "express";
import GeneralController from "./_GeneralController";

// #============= GET =============#

const GETAllManga = (req: Request, res: Response) => {
	return GeneralController.GET_All(MangaModel, req, res);
};

const GETFilterManga = async (req: Request, res: Response) => {
	return GeneralController.GET_Filtered(MangaModel, req, res);
};

// #=========== END GET ===========#

// #============= POST =============#

const POSTManga = async (req: Request, res: Response) => {
	return GeneralController.POST_Single(MangaModel, req, res);
};

// #=========== END POST ===========#

// #============= DELETE =============#

const DELETEManga = async (req: Request, res: Response) => {
	return GeneralController.DELETE_Single(MangaModel, req, res);
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHManga = async (req: Request, res: Response) => {
	return GeneralController.PATCH_Single(MangaModel, req, res);
};

const PATCHIncrementValue = async (req: Request, res: Response) => {
	return GeneralController.PATCH_IncrementValue(MangaModel, req, res);
};

// #=========== END PATCH ===========#

export default {
	GETAllManga,
	POSTManga,
	DELETEManga,
	PATCHManga,
	GETFilterManga,
	PATCHIncrementValue
};
