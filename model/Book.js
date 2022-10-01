const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    page: {
        type: Number,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Book', bookSchema)