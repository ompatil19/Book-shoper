const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    fetch:{
        type: String,
    },
    bookname:{
        type: String,

    },
    author: {
        type: String,

    },
    rating: {
        type: String,

    },
    reviews:{
        type: String,
    },
    bookcontent:{
        type: String,
    },
    genre:{
        type: String,
    },
    pages:{
        type: String,
    },
    published:{
        type: String,
    },
});

const bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel;