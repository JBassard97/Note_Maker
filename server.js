// Requiring modules
const { express, path, app } = require("./helpers/imports");
const { indexHTMLpath } = require("./helpers/serverToHTML");
const { ListenAt } = require("./helpers/customListen");
const { startMiddleware } = require("./helpers/startMiddleware");

startMiddleware();

app.get("*", (req, res) => res.sendFile(path.join(__dirname, indexHTMLpath)));

// Listening
const PORT = process.env.PORT || 3001;
ListenAt(PORT);
