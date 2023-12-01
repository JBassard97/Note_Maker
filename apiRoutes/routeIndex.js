const HTMLroutes = require("./routeToHTML");
const APIroutes = require("./routeToAPI");

const establishRoutes = () => {
  // Routes to get HTML pages
  HTMLroutes();
  // Routes to get API
  APIroutes();
};

module.exports = establishRoutes;
