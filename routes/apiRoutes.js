const router = require("express").Router();
const fs = require('fs');
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const db = require("../db/db.json")
// const { readFromFile, readAndAppend } = require('../helpers/uuid');
// const { v4: uuidv4 } = require('uuid');
// const noteId = uuidv4();

router.get("/", (req, res) => {

  fs.readFile("name-of-file.txt", "utf-8", (err, data) => {
    res.json(data)
  })

  res.json()
})



router.get('/notes', (req, res) => {
    // fs.readFile('../db/db.json', "utf-8", (err, data) => { res.json(data) })
    readFileAsync('./db/db.json', "utf8").then(data => res.json(data)).catch(err => res.status(400).json(err))
});
  
  // POST Route for a new UX/UI tip
  router.post('/notes', (req, res) => {
    const { title, text } = req.body;
      const newNote = { title, text };
      db.push(newNote)
      writeFileAsync('./db/db.json', JSON.stringify(db))
      .then(data => res.json(data))
      .catch(err => console.log(err))
  });

module.exports = router;


// const saveNote = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsHelpers');
// const { v4: uuidv4 } = require('uuid');

// // GET Route for retrieving all the tips
// saveNote.get('/', (req, res) => {
//   readFromFile('./db/application.json', "utf-8", (err, data) => res.json(JSON.parse(data)) )
// });

// // POST Route for a new UX/UI tip
// saveNote.post('/', (req, res) => {
//   const { title, text } = req.body;
//   if (req.body) {
//     const newTip = { title, text };
//     readAndAppend(newTip, './db/application.json', res.json(`Note added successfully`));
//   } else {
//     res.error('Error in adding note');
//   }
// });

