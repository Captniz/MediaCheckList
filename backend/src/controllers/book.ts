import BookModel from "../models/book";
import { Request, Response } from "express";
import GeneralController from "./_GeneralController";

// #============= GET =============#

const GETAllBook = (req: Request, res: Response) => {
	return GeneralController.GET_All(BookModel, req, res);
};

const GETFilterBook = async (req: Request, res: Response) => {
	return GeneralController.GET_Filtered(BookModel, req, res);
};

// #=========== END GET ===========#

// #============= POST =============#

const POSTBook = async (req: Request, res: Response) => {
	return GeneralController.POST_Single(BookModel, req, res);
};

// #=========== END POST ===========#

// #============= DELETE =============#

const DELETEBook = async (req: Request, res: Response) => {
	return GeneralController.DELETE_Single(BookModel, req, res);
};

// #=========== END DELETE ===========#

// #============= PATCH =============#

const PATCHBook = async (req: Request, res: Response) => {
	return GeneralController.PATCH_Single(BookModel, req, res);
};

// #=========== END PATCH ===========#

export default {
	GETAllBook,
	POSTBook,
	DELETEBook,
	PATCHBook,
	GETFilterBook,
};
