const { indexHTMLpath, notesHTMLpath } = require("../helpers/serverToHTML");
const { app, path } = require("../helpers/imports");

const HTMLroutes = () => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, indexHTMLpath));
  });

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, notesHTMLpath));
  });
};

module.exports = HTMLroutes;
