const Book = require('../model/Book')

const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
        console.log(error.message)
    }
}

const getBookById = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findById(id)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({message: 'Cannot GET the book by id'})
        console.log(error.message)
    }
}

const postBook = async (req, res) => {
    const {title, author, genre, page} = req.body
    try {
        const book = await Book.create({title, author, genre, page})
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({message: 'Cannot POST the book'})
        console.log(error.message)
    }
}

const deleteSingleBook = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findByIdAndDelete(id)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({message: 'cannot DELETE this book'})
        console.log(error.message)
    }
}

const updateSingleBook = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findByIdAndUpdate(id, req.body)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({message: 'cannot UPDATE the book'})
        console.log(error.message)
    }
}

module.exports = {
    getBooks,
    getBookById,
    postBook,
    deleteSingleBook,
    updateSingleBook
}