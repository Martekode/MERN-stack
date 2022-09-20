import BookServiceInstance from "../services/BookService.js";

export const getBooks = async (req, res) => {
    //logic
    // we await the result of the fire method and send it back to the client.
    let books = await BookServiceInstance.fireAllBooksQuery();
    res.send(books);
};

export const getBook = (res , req) => {
    //logic
};

export const createBook = (res , req) => {
    //logic
};

export const deleteBook = (res , req) => {
    //logic
};

export const updateBook = (res , req) => {
    //logic
};