import express from 'express';
import gamesController from '../controllers/games';


const Router = express.Router();

// #=============== GET ===============#

// ONE games
Router.get('/:name', gamesController.GETGame);

// ALL gamess
Router.get('/', gamesController.GETAllGame);

// #============= END GET =============#


// #=============== POST ===============#

// Single games
Router.post('/', gamesController.POSTGame);

// #============= END POST =============#


// #=============== DELETE ===============#

// Single games
Router.delete('/:id', gamesController.DELETEGame);

// #============= END DELETE =============


// #=============== PATCH ===============#

// Single games
Router.patch('/:id', gamesController.PATCHGame);

// #============= END PATCH =============#


export default Router;