const { colors } = require("./imports");

const customLog = {
  getLog: function () {
    console.info(`${colors.BrightBlueText("GET")} request received`);
  },
  postLog: function () {
    console.info(`${colors.BrightGreenText("POST")} request received`);
  },
  deleteLog: function () {
    console.info(`${colors.BrightRedText("DELETE")} request received`);
  },
};

module.exports = customLog;
