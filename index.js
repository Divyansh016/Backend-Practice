require('dotenv').config()
const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/google', (req, res) => {
    res.send("Hello");
})

app.get('/youtube', (req, res) => {
    res.send("HELLO");
})

app.listen(process.env.PORT, () => {
    console.log(`Example app Listening on Port`);
})