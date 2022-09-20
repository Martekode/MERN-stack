import mysql from 'mysql';

const Mysql = mysql;

class BookService {
    static con;
    static allBooksQuery;
    static singleBookQuery;
    static createBookQuery;
    static updateBookQuery;
    static deleteBookQuery;

    constructor(){
        this.con = Mysql.createConnection({
            host: "localhost",
            user : "becode",
            password : "Becode6-05",
            database : "bookDB"
        });
    }

    connect() {
        // throzs error when connection error occurs
        this.con.connect(function (err) {
            if (err) throw err;
            console.log("connected to the database");
        })
    }

    fireAllBooksQuery() {
        //loggic
    }

    fireSingleBookQuery() {
        //loggic
    }

    fireCreateBookQuery() {
        //loggic
    }

    fireUpdateBookQuery() {
        //loggic
    }

    fireDeleteBookQuery() {
        //loggic
    }
}

const BookServiceInstance = new BookService();
Object.freeze(BookServiceInstance);

export default BookServiceInstance;