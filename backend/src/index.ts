import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/books';
import animeRoutes from './routes/anime';
import filmRoutes from './routes/films';
import gameRoutes from './routes/games';
import seriesRoutes from './routes/series';
import mangaRoutes from './routes/manga';

// #============= SETUP =============#
const app = express();
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT || 5000;
// #=========== END SETUP ===========#


// #========== DB CONNECT ===========#
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));
// #======== END DB CONNECT =========#


// #======== ROUTES =========#
// --- #======== MEDIA ROUTES =========#
app.use('/api/books', bookRoutes);
app.use('/api/anime', animeRoutes);
app.use('/api/films', filmRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/series', seriesRoutes);
app.use('/api/manga', mangaRoutes);
// --- #====== END MEDIA ROUTES ======#

//app.get('/', (req, res) => {
//  res.send('Hello World, WIP!');
//});

// #====== END ROUTES ======#


// #======== SERVER =========#
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// #====== END SERVER ======#
