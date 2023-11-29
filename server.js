// Requiring modules
const { path, colors } = require("./helpers/imports");
const { indexHTMLpath, notesHTMLpath } = require("./helpers/serverToHTML");
// const { ListenAt } = require("./helpers/customListen");
// const { startMiddleware } = require("./helpers/startMiddleware");
const express = require("express");
const app = express();

// Body-Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// "Pointer" Middleware
app.use(express.static("public"));

// Since this is "home", simply routing it here
app.get("/", (req, res) => res.sendFile(path.join(__dirname, indexHTMLpath)));

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, notesHTMLpath))
);

// Listening
const PORT = process.env.PORT || 3001;
const ListenAt = (PORT) => {
  app.listen(PORT, () =>
    console.log(
      colors.RainbowText(`Note_Taker`),
      "is listening at",
      colors.BrightCyanText(`http://localhost:${PORT}`)
    )
  );
};

ListenAt(PORT);
