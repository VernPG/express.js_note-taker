const router = require("express").Router();
// const path = require("path");
const fs = require('fs');
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const db = require("../db/db.json");
var uniqid = require('uniqid'); 



router.get('/notes', (req, res) => {
  fs.readFile('db/db.json', "utf-8", (err, data) => { return err ? 
    console.log(err) : res.json(JSON.parse(data))})
});
router.post('/notes', (req, res) => {
  const { title, text } = req.body;
    const newNote = { title, text };
    db.push(newNote)
    writeFileAsync('./db/db.json', JSON.stringify(db))
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

// router.delete('/notes/:id', (req, res) => {
//   fs.readFile('db/db.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     let notes = JSON.parse(data);
//     const oldNotes = notes.filter(note => note.id !== parseInt(req.params.id));
  
//   fs.writeFile('db/db.json', JSON.stringify(oldNotes), (err, data) => {
//     res.json({msg: 'successfully'});
//   });
// });
// });
// router.get('api/notes/:id', (req, res) =>{
//   res.json(notes[req.params.id]);
// });



// POST Route for a new  note
// router.post('/notes', (req, res) => {
//   let db = fs.readFileSync("db/db.json");
//   db = JSON.parse(db);
//   res.json(db);
//     let newNote = { 
//       title: req.body.title,
//       text: req.body.text,
//       id: uniqid() 
//   };
//     db.push (newNote);
//     fs.writeFileSync("db/db.json", JSON.stringify(db));
//     res.json(db);
// });



module.exports = router;