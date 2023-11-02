const x = require("express").Router();
const fs = require('fs');
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const db = require("../db/db.json")
// const { readFromFile, readAndAppend } = require('../helpers/uuid');
// const { v4: uuidv4 } = require('uuid');
// const noteId = uuidv4();

x.get('/notes', (req, res) => {
    // fs.readFile('../db/db.json', "utf-8", (err, data) => { res.json(data) })
    readFileAsync('./db/db.json', "utf8")
    .then(data => res.json(data))
});
  
  // POST Route for a new UX/UI tip
  x.post('/notes', (req, res) => {
    const { title, text } = req.body;
      const newTip = { title, text };
      db.push(newTip)
      writeFileAsync('./db/db.json', JSON.stringify(db))
      .then(data => res.json(data))
      .catch(err => console.log(err))
  });

module.exports = x;


