import mysql from 'mysql';

const Mysql = mysql;

class BookService {
    static con;
    
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
}

const BookServiceInstance = new BookService();
Object.freeze(BookServiceInstance);

export default BookServiceInstance;