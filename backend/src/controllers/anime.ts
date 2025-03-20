import AnimeModel from '../models/anime';
import mongoose from 'mongoose';
import { Request, Response } from 'express';


// #============= GET =============#

// ONE anime 
const GETAnime  = async (req: Request, res: Response) => {    
    try {
        const anime = await AnimeModel.findOne({ title: req.params.name });
        
        if (!anime) {
            res.status(404).json({ message: 'Anime not found' });
        }else{
            res.status(200).json({ message: 'Single anime', anime });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching anime', error: err });
    }
};

// ALL animes
const GETAllAnime = async (req: Request, res: Response) => {
    try{
        const anime = await AnimeModel.find().sort({ title: 1 });
        res.status(200).json({ message: 'All animes', anime });
    }catch(err){
        res.status(500).json({ message: 'Error searching animes', error: err }); 
    }
};

// #=========== END GET ===========# 


// #============= POST =============#

// ONE anime
const POSTAnime = async (req: Request, res: Response) => {
    const { title, author, episodes, genre } = req.body;
    try{
        const anime = await AnimeModel.create({ title, author, episodes, genre });
        res.status(201).json({ message: 'Anime added successfully', anime });
    }catch(err){
        res.status(500).json({ message: 'Error adding anime', error: err }); 
    }
};

// #=========== END POST ===========#


// #============= DELETE =============#


// ONE anime 
const DELETEAnime  = async (req: Request, res: Response) => {    
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).json({ message: 'Invalid anime id' });
            return;
        }
        
        const anime = await AnimeModel.findByIdAndDelete(req.params.id);

        if (!anime) {
            res.status(404).json({ message: 'Anime not found' });
            return;
        }else{
            res.status(200).json({ message: 'Anime deleted successfully', anime });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching anime', error: err });
    }
};

// #=========== END DELETE ===========#


// #============= PATCH =============#

const PATCHAnime  = async (req: Request, res: Response) => {    
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).json({ message: 'Invalid anime id' });
            return;
        }
        
        const anime = await AnimeModel.findOneAndUpdate({ _id: req.params.id }, {...req.body});
        

        if (!anime) {
            res.status(404).json({ message: 'Anime not found' });
            return;
        }else{
            const newanime = await AnimeModel.findOne({ _id: req.params.id });
            res.status(200).json({ 
                message: 'Anime modified successfully',
                was:anime, 
                now:newanime
            });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching anime', error: err });
    }
};

// #=========== END PATCH ===========#


export default { 
    GETAnime,
    GETAllAnime,
    POSTAnime,
    DELETEAnime,
    PATCHAnime
};