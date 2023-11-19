const router = require("express").Router();
const path = require('path');

// router.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/notes.html'))
// );

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// router.listen(PORT, () =>
// console.log("router working on ${PORT}"));

// GET Route for notes page I added the below


module.exports = router;