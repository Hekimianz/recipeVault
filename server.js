const express = require("express");
const app = express();
const cors = require("cors");
const testRoutes = require("./routes/Test");
const port = 4000;

app.use(cors());
app.use(express.json());

app.use("/", testRoutes);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
