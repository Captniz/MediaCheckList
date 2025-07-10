import FilmModel from "../models/film";
import GeneralController from "./_GeneralController";
import { Request, Response } from "express";

// #============= GET =============#

const GETAllFilm = (req: Request, res: Response) => {
	return GeneralController.GET_All(FilmModel, req, res);
};

const GETFilterFilm = async (req: Request, res: Response) => {
	return GeneralController.GET_Filtered(FilmModel, req, res);
};

// #=========== END GET ===========#

// #============= POST =============#

const POSTFilm = async (req: Request, res: Response) => {
	return GeneralController.POST_Single(FilmModel, req, res);
};

// #=========== END POST ===========#

// #============= DELETE =============#

const DELETEFilm = async (req: Request, res: Response) => {
	return GeneralController.DELETE_Single(FilmModel, req, res);
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHFilm = async (req: Request, res: Response) => {
	return GeneralController.PATCH_Single(FilmModel, req, res);
};

// #=========== END PATCH ===========#

export default {
	GETAllFilm,
	POSTFilm,
	DELETEFilm,
	PATCHFilm,
	GETFilterFilm,
};
