const Book = require('../model/Book')

const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json('Cannot GET the books')
    }
}

const getBookById = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findById(id)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json('Cannot GET the book by id')
    }
}

const postBook = async (req, res) => {
    const {title, author, genre, page} = req.body
    try {
        const book = await Book.create({title, author, genre, page})
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json('Cannot POST the book')
    }
}

const deleteSingleBook = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findByIdAndDelete(id)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json('cannot DELETE this book')
    }
}

const updateSingleBook = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findByIdAndUpdate(id, req.body)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json('cannot UPDATE the book')
    }
}

module.exports = {
    getBooks,
    getBookById,
    postBook,
    deleteSingleBook,
    updateSingleBook
}