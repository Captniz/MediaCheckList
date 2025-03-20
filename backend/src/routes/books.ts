import express from 'express';
import bookController from '../controllers/books';


const Router = express.Router();

// #=============== GET ===============#

// ONE book
Router.get('/:name', bookController.GETBook);

// ALL books
Router.get('/', bookController.GETAllBook);

// #============= END GET =============#


// #=============== POST ===============#

// Single book
Router.post('/', bookController.POSTBook);

// #============= END POST =============#


// #=============== DELETE ===============#


// #============= END DELETE =============


// #=============== UPDATE ===============#

// #============= END UPDATE =============#


export default Router;