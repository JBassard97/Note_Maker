const { colors, app } = require("./imports");

const ListenAt = (PORT) => {
  app.listen(PORT, () =>
    console.log(
      colors.RainbowText(`Note_Taker`),
      colors.MagentaText("is listening at"),
      colors.BrightCyanText(`http://localhost:${PORT}`)
    )
  );
};

module.exports = ListenAt;
