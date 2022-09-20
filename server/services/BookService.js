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
        this.allBooksQuery = "SELECT * FROM books_table";
    }


    async fireAllBooksQuery() {
        // we return a new promise to force the code to wait fro the result. 
        return new Promise((resolve,reject)=>{
            this.con.query(this.allBooksQuery,async function(err,result,field){
                    resolve(result)
            });
        })
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