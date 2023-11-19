const express = require('express');
// const uuid = require('../js/helpers/uuid');
const api = require("./routes/apiRoutes");
const html = require("./routes/htmlRoutes"); 
const { v4: uuidv4 } = require('uuid');

const app = express();

const PORT = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);
app.use('/', html)

// require("./routes/apiRoutes")(router);
// require("./routes/htmlRoutes")(router); 

// // GET Route for homepage I added the below
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for notes page I added the below
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// app.post('/api/notes', (req, res) => {
//   console.info(`${req.method} request received to add a note`);
// });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

