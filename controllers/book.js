const userModels = require('../models/book.models');
const getbooks = (req, res) => {

    let { email } = req.query
    userModels.findOne({ email: email }, (error, books) => {
        if (error) {
            res.send(error.message)
        }
        console.log(books);
        res.send(books);

    });
}

const addBook = async (req, res) => {

    console.log(req.body);
    const { email, title, description, author } = req.body;
    // res.send(' A NEW BOOK 📘 !!! ')
    /// creat new book
    const newBookObj = new userModels({
        email: email,
        title: title,
        description: description,
        author: author
    })
    newBookObj.save();

    res.json(newBookObj);
}

const deletBook = async (req, res) => {
    res.send(`you deleted a book ${req.params.book_id}`)

    let bookId = req.params.book_id;
    userModels.deleteOne({ _id: bookId }, (error, deleted) => {
        res.send(deleted);
    });

}

module.exports = {
    getbooks,
    addBook,
    deletBook
}

