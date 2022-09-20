import BookServiceInstance from "../services/BookService.js";

export const getBooks = async (req, res) => {
    //logic
    // we await the result of the fire method and send it back to the client.
    let books = await BookServiceInstance.fireAllBooksQuery();
    res.send(books);
};

export const getBook = async (req , res) => {
    //logic
    const { id } = req.params;
    let book = await BookServiceInstance.fireSingleBookQuery(id);
    res.send(book);
};

export const createBook = (req , res) => {
    const obj = req.body;
    BookServiceInstance.fireCreateBookQuery(obj);
    res.send("Bookd created successfully");
    //logic
};

export const deleteBook = (req , res) => {
    //logic
};

export const updateBook = (req , res) => {
    //logic
};