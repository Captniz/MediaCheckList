import express from 'express';

const BookModels = require('../models/books');
const Router = express.Router();


// #=============== GET ===============#

// All books
Router.get('/', (req, res) => {
    res.json({ message: 'GET all books' });
});

// Single book
Router.get('/:id', (req, res) => {
    res.json({ message: `GET single book with id ${req.params.id}` });
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
    res.json({ message: `DELETE single book with id ${req.params.id}` });
})

// #============= END DELETE =============


// #=============== UPDATE ===============#

// Update a book
Router.post('/:id', (req, res) => {
    res.json({ message: `UPDATE single book with id ${req.params.id}` });
})

// #============= END UPDATE =============#

module.exports = Router;