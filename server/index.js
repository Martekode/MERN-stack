import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql'

const app = express();
const Mysql = mysql;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());


// later to be stored in env variables
const PORT = process.env.PORT || 5000;


// connection to the database
const con = Mysql.createConnection({
    host: "localhost",
    user : "becode",
    password : "Becode6-05"
});

// throzs error when connection error occurs
con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
})
