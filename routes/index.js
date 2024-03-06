const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');



//get route for homepage
router.get('/', (req, res) =>
   res.sendFile(path.join(__dirname, '../public/index.html'))
 );

 //get route for the notes page 
router.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
 );

router.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (error, data) => {
        if (error) {
            throw new Error(error);
            
        }
         return res.json(JSON.parse(data));
        

    })
})


 //posts new data (notes) into the database JSON, as well as giving it a new ID per note
 router.post("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (error, data) => {
        const notes = JSON.parse(data);
        const newNotes = req.body;
        newNotes.id = uniqid();

        notes.push(newNotes);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (error, data) => {
            res.json(notes);
        });

    });
 });

//Wildcart route: if the user thinks theyre funny and puts a random route into the searchbar it just takes you to the homepage
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;