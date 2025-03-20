import MangaModel from '../models/manga';
import mongoose from 'mongoose';
import { Request, Response } from 'express';


// #============= GET =============#

// ONE manga 
const GETManga  = async (req: Request, res: Response) => {    
    try {
        const manga = await MangaModel.findOne({ title: req.params.name });
        
        if (!manga) {
            res.status(404).json({ message: 'Manga not found' });
        }else{
            res.status(200).json({ message: 'Single manga', manga });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching manga', error: err });
    }
};

// ALL mangas
const GETAllManga = async (req: Request, res: Response) => {
    try{
        const manga = await MangaModel.find().sort({ title: 1 });
        res.status(200).json({ message: 'All mangas', manga });
    }catch(err){
        res.status(500).json({ message: 'Error searching mangas', error: err }); 
    }
};

// #=========== END GET ===========# 


// #============= POST =============#

// ONE manga
const POSTManga = async (req: Request, res: Response) => {
    const { title, author, pages, genre } = req.body;
    try{
        const manga = await MangaModel.create({ title, author, pages, genre });
        res.status(201).json({ message: 'Manga added successfully', manga });
    }catch(err){
        res.status(500).json({ message: 'Error adding manga', error: err }); 
    }
};

// #=========== END POST ===========#


// #============= DELETE =============#


// ONE manga 
const DELETEManga  = async (req: Request, res: Response) => {    
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).json({ message: 'Invalid manga id' });
            return;
        }
        
        const manga = await MangaModel.findByIdAndDelete(req.params.id);

        if (!manga) {
            res.status(404).json({ message: 'Manga not found' });
            return;
        }else{
            res.status(200).json({ message: 'Manga deleted successfully', manga });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching manga', error: err });
    }
};

// #=========== END DELETE ===========#


// #============= PATCH =============#

const PATCHManga  = async (req: Request, res: Response) => {    
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).json({ message: 'Invalid manga id' });
            return;
        }
        
        const manga = await MangaModel.findOneAndUpdate({ _id: req.params.id }, {...req.body});
        

        if (!manga) {
            res.status(404).json({ message: 'Manga not found' });
            return;
        }else{
            const newmanga = await MangaModel.findOne({ _id: req.params.id });
            res.status(200).json({ 
                message: 'Manga modified successfully',
                was:manga, 
                now:newmanga
            });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching manga', error: err });
    }
};

// #=========== END PATCH ===========#


export default { 
    GETManga,
    GETAllManga,
    POSTManga,
    DELETEManga,
    PATCHManga
};