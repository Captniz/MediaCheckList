import express from 'express';
import seriesController from '../controllers/series';


const Router = express.Router();

// #=============== GET ===============#

// ONE series
Router.get('/:name', seriesController.GETSeries);

// ALL seriess
Router.get('/', seriesController.GETAllSeries);

// #============= END GET =============#


// #=============== POST ===============#

// Single series
Router.post('/', seriesController.POSTSeries);

// #============= END POST =============#


// #=============== DELETE ===============#

// Single series
Router.delete('/:id', seriesController.DELETESeries);

// #============= END DELETE =============


// #=============== PATCH ===============#

// Single series
Router.patch('/:id', seriesController.PATCHSeries);

// #============= END PATCH =============#


export default Router;