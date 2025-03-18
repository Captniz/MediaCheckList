import express from 'express';

const router = express.Router();

// Get all books
router.get('/', (req, res) => {
    res.json({ message: 'GET all books' });
})

// Get single book
router.get('/:id', (req, res) => {
    res.json({ message: `GET single book with id ${req.params.id}` });
  })

// Add new book
router.post('/', (req, res) => {
    const { title, author, description } = req.body;
    res.json({ message: 'POST a new books' });
})

// Delete a book
router.delete ('/:id', (req, res) => {
    res.json({ message: `DELETE single book with id ${req.params.id}` });
})

// Update a book
router.post('/:id', (req, res) => {
    res.json({ message: `UPDATE single book with id ${req.params.id}` });
})

module.exports = router;