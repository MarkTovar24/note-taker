const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const express = require('express');
const app = express();

//get route for homepage
app.get('/', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/index.html'))
 );

 //get route for the notes page 
 app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
 );

