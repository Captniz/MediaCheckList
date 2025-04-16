import express from "express";
import filmController from "../controllers/films";

const Router = express.Router();

// #=============== GET ===============#

// ALL films
Router.get("/", filmController.GETAllFilm);

// Filter films
Router.get("/search", filmController.GETFilterFilm);

// #============= END GET =============#

// #=============== POST ===============#

// Single film
Router.post("/", filmController.POSTFilm);

// #============= END POST =============#

// #=============== DELETE ===============#

// Single film
Router.delete("/:id", filmController.DELETEFilm);

// #============= END DELETE =============

// #=============== PATCH ===============#

// Single film
Router.patch("/:id", filmController.PATCHFilm);

// #============= END PATCH =============#

export default Router;
