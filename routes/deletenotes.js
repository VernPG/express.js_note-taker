const deleteNote = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsHelpers');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the tips
deleteNote.get('/', (req, res) => {
  readFromFile('./db/application.json', "utf-8", (err, data) => res.json(JSON.parse(data)) )
});

// POST Route for a new UX/UI tip
deleteNote.post('/', (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newTip = { title, text };
    readAndAppend(newTip, './db/application.json', res.json(`Note added successfully`));
  } else {
    res.error('Error in adding note');
  }
});

module.exports = deleteNote;