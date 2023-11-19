const router = require("express").Router();
// const path = require("path");
const fs = require('fs');
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const db = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');



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

// router.delete(“delete/:id”), function() 
// router.post("/delete", function (req, res) {

//   const deletedItemId = req.body.deleteBtn;

//   Event.findByIdAndDelete(deletedItemId, function (err) {
//     if (!err) {
//       console.log("Successfully deleted");
//       res.redirect("/admin");
//     } else {
//       console.log(err);
//     }
//   });
// });


module.exports = router;