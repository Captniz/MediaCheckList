import express from 'express';
import animeController from '../controllers/anime';


const Router = express.Router();

// #=============== GET ===============#

// ONE anime
Router.get('/:name', animeController.GETAnime);

// ALL animes
Router.get('/', animeController.GETAllAnime);

// #============= END GET =============#


// #=============== POST ===============#

// Single anime
Router.post('/', animeController.POSTAnime);

// #============= END POST =============#


// #=============== DELETE ===============#

// Single anime
Router.delete('/:id', animeController.DELETEAnime);

// #============= END DELETE =============


// #=============== PATCH ===============#

// Single anime
Router.patch('/:id', animeController.PATCHAnime);

// #============= END PATCH =============#


export default Router;