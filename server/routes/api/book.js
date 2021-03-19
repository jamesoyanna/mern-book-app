const express = require('express');

const router = express.Router();

//Load Book model
const Book = require("../../models/Books");

router.get('/test', (req, res)=> res.send("Book route testing !"));

router.get('/', (req, res)=> {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({nobooksfound: 'No books found'}));
})


// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) =>{
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({nobookfound: 'No book found'}));
});

router.post('/', (req, res)=> {
    Book.create(req.body)
    .then(book => res.json({msg: 'Book added successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to add this book'}))
});

// @description Update book
router.put('/:id', (req, res)=> {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({msg: 'Updated successfully'}))
    .catch(err => 
        res.status(400).json({error: 'Unable to update the Database'})
        );
})

// @description Delete book
router.delete('/:id', (req, res)=>{
    Book.findIdAndRemove(req.params.id, req.body)
    .then(book => res.json({msg: 'Book entry deleted successfully'}))
    .catch(err => res.status(404).json({error: 'No such a book'}));
})

module.exports = router;