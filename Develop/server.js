//Setting up 
const express = require('express');
const PORT = 3001;
const app = express();
const api = require('./routes/index.js');
const path = require('path');




app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));


//get route for homepage
app.get('/', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/index.html'))
 );

 //get route for the notes page 
 app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
 );


 app.listen(PORT, () =>
    console.log(`example app listening at http://localhost:${PORT}`)
 );