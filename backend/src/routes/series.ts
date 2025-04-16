import express from "express";
import seriesController from "../controllers/series";

const Router = express.Router();

// #=============== GET ===============#

// ALL seriess
Router.get("/", seriesController.GETAllSeries);

// GET ALL FILTERED series
Router.get("/search", seriesController.GETFilterSeries);

// #============= END GET =============#

// #=============== POST ===============#

// Single series
Router.post("/", seriesController.POSTSeries);

// #============= END POST =============#

// #=============== DELETE ===============#

// Single series
Router.delete("/:id", seriesController.DELETESeries);

// #============= END DELETE =============

// #=============== PATCH ===============#

// Single series
Router.patch("/:id", seriesController.PATCHSeries);

// #============= END PATCH =============#

export default Router;
