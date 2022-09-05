const mongoose = require("mongoose");
const express = require("express");
const appRouter = require("./routers/appRouter");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster2.nt5oj.mongodb.net/?retryWrites=true&w=majority`
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(appRouter);
app.use(cors());

console.log(mongoose.connection.readyState);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
