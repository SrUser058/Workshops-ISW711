require('dotenv').config();

/*const routes = require('./routes/routes');
app.use('/api', routes)*/

const express = require('express');
const mongoose = require('mongoose');

//Forma para tomar el string del archivo .env
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})