const mongoose = require('mongoose')
const express = require('express')
const app = require('./app');
const PORT = 8080 || process.env.PORT;
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.ogefg.mongodb.net/MyFirstDb?retryWrites=true&w=majority`)
    .then(() => console.log('Connected to DB'))

app.use(express.json())
app.use('/items', require('./routes/Items'))

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
});