import express from 'express';
import mangaController from '../controllers/manga';


const Router = express.Router();

// #=============== GET ===============#

// ONE manga
Router.get('/:name', mangaController.GETManga);

// ALL mangas
Router.get('/', mangaController.GETAllManga);

// #============= END GET =============#


// #=============== POST ===============#

// Single manga
Router.post('/', mangaController.POSTManga);

// #============= END POST =============#


// #=============== DELETE ===============#

// Single manga
Router.delete('/:id', mangaController.DELETEManga);

// #============= END DELETE =============


// #=============== PATCH ===============#

// Single manga
Router.patch('/:id', mangaController.PATCHManga);

// #============= END PATCH =============#


export default Router;