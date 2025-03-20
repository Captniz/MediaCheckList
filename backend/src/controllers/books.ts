import BookModel from '../models/books';
import mongoose from 'mongoose';
import { Request, Response } from 'express';


// #============= GET =============#

// ONE book 
const GETBook  = async (req: Request, res: Response) => {    
    try {
        const book = await BookModel.findOne({ title: req.params.name });
        
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        }else{
            res.status(200).json({ message: 'Single book', book });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching book', error: err });
    }
};

// ALL books
const GETAllBook = async (req: Request, res: Response) => {
    try{
        const book = await BookModel.find().sort({ title: 1 });
        res.status(200).json({ message: 'All books', book });
    }catch(err){
        res.status(500).json({ message: 'Error searching books', error: err }); 
    }
};

// #=========== END GET ===========# 


// #============= POST =============#

// ONE book
const POSTBook = async (req: Request, res: Response) => {
    const { title, author, pages, genre } = req.body;
    try{
        const book = await BookModel.create({ title, author, pages, genre });
        res.status(201).json({ message: 'Book added successfully', book });
    }catch(err){
        res.status(500).json({ message: 'Error adding book', error: err }); 
    }
};

// #=========== END POST ===========#


// #============= DELETE =============#


// ONE book 
const DELETEBook  = async (req: Request, res: Response) => {    
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).json({ message: 'Invalid book id' });
            return;
        }
        
        const book = await BookModel.findByIdAndDelete(req.params.id);

        if (!book) {
            res.status(404).json({ message: 'Book not found' });
            return;
        }else{
            res.status(200).json({ message: 'Book deleted successfully', book });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching book', error: err });
    }
};

// #=========== END DELETE ===========#


// #============= PATCH =============#

const PATCHBook  = async (req: Request, res: Response) => {    
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).json({ message: 'Invalid book id' });
            return;
        }
        
        const book = await BookModel.findOneAndUpdate({ _id: req.params.id }, {...req.body});
        

        if (!book) {
            res.status(404).json({ message: 'Book not found' });
            return;
        }else{
            const newbook = await BookModel.findOne({ _id: req.params.id });
            res.status(200).json({ 
                message: 'Book modified successfully',
                was:book, 
                now:newbook
            });
        }
        
    }catch(err){
        res.status(500).json({ message: 'Error searching book', error: err });
    }
};

// #=========== END PATCH ===========#


export default { 
    GETBook,
    GETAllBook,
    POSTBook,
    DELETEBook,
    PATCHBook
};