const express = require('express');
const path = require('path');
// const uuid = require('./helpers/uuid');
// const { v4: uuidv4 } = require('uuid');
// const noteId = uuidv4();
// const fs = require('fs');
const app = express();
const api = require("./routes/savenote");
const html = require("./routes/savenote"); 
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);
app.use('/', html)

// GET Route for homepage I added the below
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page I added the below
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// app.post('/api/notes', (req, res) => {
//   console.info(`${req.method} request received to add a note`);
// });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

