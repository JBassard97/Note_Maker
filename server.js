const express = require("express");
const fs = require("fs");
const { path, colors } = require("./helpers/imports");
const { indexHTMLpath, notesHTMLpath } = require("./helpers/serverToHTML");
const uniqueId = require("./helpers/uniqueId");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, indexHTMLpath));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, notesHTMLpath));
});

app.get("/api/notes", (req, res) => {
  const rawData = fs.readFileSync("./db.json");
  const data = JSON.parse(rawData);
  res.json(data);
});

app.post("/api/notes", (req, res) => {
  const rawData = fs.readFileSync("./db.json");
  const data = JSON.parse(rawData);

  const newData = req.body;
  // TODO: ADD THINGS TO NEWDATA HERE
  // Assuming you have a function named uniqueId to generate unique IDs
  newData.id = uniqueId();

  data.push(newData);
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
  res.json({ message: "Data appended successfully", newData });
});

app.delete("/api/notes/:id", (req, res) => {
  const noteId = req.params.id;
  const rawData = fs.readFileSync("./db.json");
  let data = JSON.parse(rawData);

  // Remove the note with the specified ID
  data = data.filter((note) => note.id !== noteId);

  // Write the updated data back to the file
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));

  res.json({ message: "Note deleted successfully", noteId });
});

// Listening
app.listen(PORT, () => {
  console.log(
    colors.RainbowText("Note_Taker"),
    "is listening at",
    colors.BrightCyanText(`http://localhost:${PORT}`)
  );
});

// const express = require("express");
// const fs = require("fs");
// const { path, colors } = require("./helpers/imports");
// const { indexHTMLpath, notesHTMLpath } = require("./helpers/serverToHTML");
// const uniqueId = require("./helpers/uniqueId");

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// // Routes
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, indexHTMLpath));
// });

// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, notesHTMLpath));
// });

// app.get("/api/notes", (req, res) => {
//   const rawData = fs.readFileSync("./db.json");
//   const data = JSON.parse(rawData);
//   res.json(data);
// });

// app.post("/api/notes", (req, res) => {
//   const rawData = fs.readFileSync("./db.json");
//   const data = JSON.parse(rawData);

//   const newData = req.body;
//   // TODO: ADD THINGS TO NEWDATA HERE
//   newData.id = uniqueId();

//   data.push(newData);
//   fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
//   res.json({ message: "Data appended successfully", newData });
// });

// // TODO: Implement delete route

// // Listening
// app.listen(PORT, () => {
//   console.log(
//     colors.RainbowText("Note_Taker"),
//     "is listening at",
//     colors.BrightCyanText(`http://localhost:${PORT}`)
//   );
// });
