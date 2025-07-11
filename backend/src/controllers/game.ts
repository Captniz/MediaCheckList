import GameModel from "../models/game";
import { Request, Response } from "express";
import GeneralController from "./_GeneralController";

// #============= GET =============#

const GETAllGame = (req: Request, res: Response) => {
	return GeneralController.GET_All(GameModel, req, res);
};

const GETFilterGame = async (req: Request, res: Response) => {
	return GeneralController.GET_Filtered(GameModel, req, res);
};

// #=========== END GET ===========#

// #============= POST =============#

const POSTGame = async (req: Request, res: Response) => {
	return GeneralController.POST_Single(GameModel, req, res);
};

// #=========== END POST ===========#

// #============= DELETE =============#

const DELETEGame = async (req: Request, res: Response) => {
	return GeneralController.DELETE_Single(GameModel, req, res);
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHGame = async (req: Request, res: Response) => {
	return GeneralController.PATCH_Single(GameModel, req, res);
};

const PATCHIncrementValue = async (req: Request, res: Response) => {
	return GeneralController.PATCH_IncrementValue(GameModel, req, res);
};

// #=========== END PATCH ===========#

export default {
	GETAllGame,
	POSTGame,
	DELETEGame,
	PATCHGame,
	GETFilterGame,
	PATCHIncrementValue
};
