import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import booksRoutes from './routes/books.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());
app.get('/api' , (res,req)=> {
    req.send('welcome to the book API!');
})
app.use('/api/books', booksRoutes);

// later to be stored in env variables
const PORT = process.env.PORT || 8080;

app.listen(PORT , ()=> console.log("listening on port " + PORT));

