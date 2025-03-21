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

// Single book
Router.delete('/:id', bookController.DELETEBook);

// #============= END DELETE =============


// #=============== PATCH ===============#

// Single book
Router.patch('/:id', bookController.PATCHBook);

// #============= END PATCH =============#


export default Router;