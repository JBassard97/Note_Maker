const startMiddleware = require("./helpers/startMiddleware");
const establishRoutes = require("./apiRoutes/routeIndex");
const ListenAt = require("./helpers/customListen");

// Middleware
startMiddleware();

// Calling all routes
establishRoutes();

// Listening
const PORT = process.env.PORT || 3001;
ListenAt(PORT);
