import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';
import booksRoutes from './routes/books.js';

const app = express();
const Mysql = mysql;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());
app.get('/api' , (res,req)=> {
    req.send('welcome to the book API!');
})
app.use('/api/books', booksRoutes);

// later to be stored in env variables
const PORT = process.env.PORT || 8080;


// connection to the database
const con = Mysql.createConnection({
    host: "localhost",
    user : "becode",
    password : "Becode6-05"
});

// throzs error when connection error occurs
con.connect(function (err) {
    if (err) throw err;
    console.log("connected to the database");
})


app.listen(PORT , ()=> console.log("listening on port " + PORT));

