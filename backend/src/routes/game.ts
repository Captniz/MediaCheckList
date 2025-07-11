import express from "express";
import gamesController from "../controllers/game";

const Router = express.Router();

// #=============== GET ===============#

// ALL games
Router.get("/", gamesController.GETAllGame);

// ALL FILTERED games
Router.get("/search", gamesController.GETFilterGame);

// #============= END GET =============#

// #=============== POST ===============#

// Single games
Router.post("/", gamesController.POSTGame);

// #============= END POST =============#

// #=============== DELETE ===============#

// Single games
Router.delete("/:id", gamesController.DELETEGame);

// #============= END DELETE =============

// #=============== PATCH ===============#

// Single games
Router.patch("/:id", gamesController.PATCHGame);

// Increment value in game
Router.patch("/:id/increment", gamesController.PATCHIncrementValue);

// #============= END PATCH =============#

export default Router;
