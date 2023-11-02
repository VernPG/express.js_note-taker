const router = require("express").Router();
const path = require('path');

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for notes page I added the below


module.exports = router;

// const express = require('express');


// const getNotes = require('./notes');
// const saveNote = require('./savenote');
// // TODO: import your diagnostics route

// const app = express();

// app.use('/notes', getNotes);
// app.use('/notes', saveNote);
// // TODO: Initialize diagnostics route

// module.exports = app;