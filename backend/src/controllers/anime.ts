import AnimeModel from "../models/anime";
import { Request, Response } from "express";
import GeneralController from "./_GeneralController";

// #============= GET =============#

const GETAllAnime = (req: Request, res: Response) => {
	return GeneralController.GET_All(AnimeModel, req, res);
};

const GETFilterAnime = async (req: Request, res: Response) => {
	return GeneralController.GET_Filtered(AnimeModel, req, res);
};

// #=========== END GET ===========#

// #============= POST =============#

const POSTAnime = async (req: Request, res: Response) => {
	return GeneralController.POST_Single(AnimeModel, req, res);
};

// #=========== END POST ===========#

// #============= DELETE =============#

const DELETEAnime = async (req: Request, res: Response) => {
	return GeneralController.DELETE_Single(AnimeModel, req, res);
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHAnime = async (req: Request, res: Response) => {
	return GeneralController.PATCH_Single(AnimeModel, req, res);
};

// #=========== END PATCH ===========#

export default {
	GETAllAnime,
	POSTAnime,
	DELETEAnime,
	PATCHAnime,
	GETFilterAnime,
};
