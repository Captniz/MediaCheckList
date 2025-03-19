import express from 'express';

const Router = express.Router();
const BookModels = require('../models/books');

// #=============== GET ===============#

// All books
Router.get('/', async (req, res) => {
    try{
        const book = await BookModels.find().sort({ title: 1 });
        res.status(200).json({ message: 'All books', book });
    }catch(err){
        res.status(500).json({ message: 'Error searching books', error: err }); 
    }
});

// Single book
Router.get('/:name', async (req, res) => {
    
    try{
        const book = await BookModels.findOne({ title: req.params.name });
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Single book', book });
    }catch(err){
        res.status(500).json({ message: 'Error searching book', error: err });
    }

});

// #============= END GET =============#


// #=============== POST ===============#

// Single book
Router.post('/', async (req, res) => {
    const { title, author, pages, genre } = req.body;
    try{
        const book = await BookModels.create({ title, author, pages, genre });
        res.status(201).json({ message: 'Book added successfully', book });
    }catch(err){
        res.status(500).json({ message: 'Error adding book', error: err }); 
    }
})

// #============= END POST =============#


// #=============== DELETE ===============#

Router.delete ('/:id', (req, res) => {
//TODO
})

// #============= END DELETE =============


// #=============== UPDATE ===============#

// Update a book
Router.post('/:id', (req, res) => {
    //TODO
})

// #============= END UPDATE =============#

module.exports = Router;