// Requiring modules
const { colors, express, path, app } = require("./helpers/imports");
const { ListenAt } = require("./helpers/customListen");
// Body-Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// "Pointer" Middleware
app.use(express.static("public"));

app.get("*", (req, res) => res.send());

// Listening
const PORT = process.env.PORT || 3001;
ListenAt(PORT);
