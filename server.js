const uniqueId = require("./helpers/uniqueId");
const ListenAt = require("./helpers/customListen");
const { app, path, fs } = require("./helpers/imports");
const startMiddleware = require("./helpers/startMiddleware");
const { indexHTMLpath, notesHTMLpath } = require("./helpers/serverToHTML");
const routeIndex = require("./apiRoutes/routeIndex");

// Middleware
startMiddleware();

// Routes to get HTML pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, indexHTMLpath));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, notesHTMLpath));
});

// app.get("/api", routeIndex);
app.get("/api/notes", (req, res) => {
  const rawData = fs.readFileSync("./db.json");
  const data = JSON.parse(rawData);
  res.json(data);
});

app.post("/api/notes", (req, res) => {
  const rawData = fs.readFileSync("./db.json");
  const data = JSON.parse(rawData);

  const newData = req.body;
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
const PORT = process.env.PORT || 3001;
ListenAt(PORT);
