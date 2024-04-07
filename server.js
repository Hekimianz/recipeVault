const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/Users");
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000", // Specify the origin of your frontend application
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    "access-control-allow-credentials": true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
