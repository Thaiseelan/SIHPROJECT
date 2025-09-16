const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const therapistRoutes = require("./routes/therapistRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/therapists", therapistRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
