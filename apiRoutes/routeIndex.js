// const { router, fs } = require("../helpers/imports");

// router.get("/notes", (req, res) => {
//   const rawData = fs.readFileSync("./db.json");
//   const data = JSON.parse(rawData);
//   res.json(data);
// });

// router.post("/notes", (req, res) => {
//   const rawData = fs.readFileSync("./db.json");
//   const data = JSON.parse(rawData);

//   const newData = req.body;
//   newData.id = uniqueId();

//   data.push(newData);
//   fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
//   res.json({ message: "Data appended successfully", newData });
// });

// router.delete("/notes/:id", (req, res) => {
//   const noteId = req.params.id;
//   const rawData = fs.readFileSync("./db.json");
//   let data = JSON.parse(rawData);

//   // Remove the note with the specified ID
//   data = data.filter((note) => note.id !== noteId);

//   // Write the updated data back to the file
//   fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));

//   res.json({ message: "Note deleted successfully", noteId });
// });

// module.exports = router;
