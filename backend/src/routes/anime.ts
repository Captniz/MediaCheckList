import express from "express";
import animeController from "../controllers/anime";

const Router = express.Router();

// #=============== GET ===============#


// ALL animes
Router.get("/", animeController.GETAllAnime);

// Filter animes
Router.get("/search", animeController.GETFilterAnime);

// #============= END GET =============#

// #=============== POST ===============#

// Single anime
Router.post("/", animeController.POSTAnime);

// #============= END POST =============#

// #=============== DELETE ===============#

// Single anime
Router.delete("/:id", animeController.DELETEAnime);

// #============= END DELETE =============

// #=============== PATCH ===============#

// Single anime
Router.patch("/:id", animeController.PATCHAnime);

// #============= END PATCH =============#

export default Router;
