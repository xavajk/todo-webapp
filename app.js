const { MongoClient } = require('mongodb');
const express = require('express');
const mongoose = require('mongoose')
const uri = require('./atlas_uri');

const app = express();

// mongo configuration //

// const client = new MongoClient(uri);
// const dbname = "bank";

// const connectToDatabase = async () => {
//     try {
//         await client.connect();
//         console.log(`Connected to the ${dbname} the database`);
//     } catch (error) {
//         console.error(`Error connecting to the database: ${error}`);
//     }
// };

// const connect = async () => {
//     try {
//         await connectToDatabase();
//     } catch (error) {
//         console.error(`Error connecting to the database: ${error}`);
//     } finally {
//         await client.close();
//     }
// };

// connect();

// mongodb connection //
mongoose.set('strictQuery', true)
mongoose.connect(uri);

// middlewares //
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes //
app.use(require('./routes/index'));
app.use(require('./routes/todo'));
app.use(require('./routes/todo'));

// server configuration... //
app.listen(5001, () => console.log("Server listening on port 5001..."));