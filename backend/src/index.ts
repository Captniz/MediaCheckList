import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const bookRoutes = require('./routes/books');

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
app.use('/api/books', bookRoutes);
app.get('/', (req, res) => {
  res.send('Hello World, WIP!');
});
// #====== END ROUTES ======#


// #======== SERVER =========#
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// #====== END SERVER ======#
