import mysql from 'mysql';

const Mysql = mysql;

class BookService {
    static con;
    static allBooksQuery;

    constructor(){
        this.con = Mysql.createConnection({
            host: "localhost",
            user : "becode",
            password : "Becode6-05",
            database : "bookDB"
        });
        this.allBooksQuery = "SELECT * FROM books_table";
    }


    fireAllBooksQuery() {
        // we return a new promise to force the code to wait fro the result. 
        return new Promise((resolve,reject)=>{
            this.con.query(this.allBooksQuery,async function(err,result,field){
                if (err) throw err;
                resolve(result)
            });
        })
    }

    fireSingleBookQuery(id) {
        //loggic
        const singleBookQuery = "SELECT * FROM books_table WHERE id = " + id;
        return new Promise((resolve, reject) => {
            this.con.query(singleBookQuery , async function(err,result,field){
                if (err) throw err;
                resolve(result);
            })
        })
    }

    fireCreateBookQuery(obj) {
        //loggic
        const { 
            book_name, 
            author_name,
            publisher,
            page_count,
            book_mark,
            review
            } = obj;

        const createBookQuery = `INSERT INTO books_table (book_name, author_name, publisher, page_count, book_mark, review ) VALUES ('${book_name}' , '${author_name}' , '${publisher}' , ${page_count}, ${book_mark} , '${review}')`;
        return new Promise((resolve,reject)=>{
            this.con.query(createBookQuery, async function(err, result , field){
                if (err) throw err;
                resolve(result);
            })
        })
    }

    fireUpdateBookQuery() {
        //loggic
        return new Promise((resolve, reject)=>{
            this.con.query(updateBookQuery, async function(err,result,field){
                if (err) throw err;
                resolve(result);
            })
        })
    }

    fireDeleteBookQuery() {
        //loggic
        return new Promise((resolve, reject)=>{
            this.con.query(deleteBookQuery, async function(err,result,field){
                if(err) throw err;
                resolve(result);
            })
        });
    }
}

const BookServiceInstance = new BookService();
Object.freeze(BookServiceInstance);

export default BookServiceInstance;