const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello World !! AWS Project !!');
})


const PORT = 3000;
app.listen(3000, (req, res) => {
    console.log('Server is Start');
})