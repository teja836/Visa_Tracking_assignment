const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const database = require("./Database/dbConnect");

const visaTrack = require("./Controllers/visadata");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  }),
);

app.listen("3035", (req, res) => {
  console.log("Working at 3035");
});

//api
app.use("/api/visa", visaTrack);

app.get("/", (req, res) => {
  res.json({
    name: "Teja",
    siteTest: "Working",
  });
});
