const express = require('express')
const router = express.Router()
const {getBooks, postBook, getBookById, deleteSingleBook, updateSingleBook} = require('../controller/bookController')

router.get('/', getBooks)

router.post('/', postBook)

router.get('/:id', getBookById)

router.delete('/:id', deleteSingleBook)

router.patch('/:id', updateSingleBook)

module.exports = router;