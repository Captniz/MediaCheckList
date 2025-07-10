import express from "express";
import bookController from "../controllers/book";

const Router = express.Router();

// #=============== GET ===============#

// ALL books
Router.get("/", bookController.GETAllBook);

// Filter books
Router.get("/search", bookController.GETFilterBook);

// #============= END GET =============#

// #=============== POST ===============#

// Single book
Router.post("/", bookController.POSTBook);

// #============= END POST =============#

// #=============== DELETE ===============#

// Single book
Router.delete("/:id", bookController.DELETEBook);

// #============= END DELETE =============

// #=============== PATCH ===============#

// Single book
Router.patch("/:id", bookController.PATCHBook);

// #============= END PATCH =============#

export default Router;
