//Setting up 
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const api = require('./routes/index.js');






app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(api);

// //get route for homepage
// app.get('/', (req, res) =>
//    res.sendFile(path.join(__dirname, '../public/index.html'))
//  );

//  //get route for the notes page 
//  app.get('/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
//  );


 app.listen(PORT, () =>
    console.log(`example app listening at http://localhost:${PORT}`)
 );
