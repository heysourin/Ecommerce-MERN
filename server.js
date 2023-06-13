import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
dotenv.config();
const app = express(); //rest object

const PORT = process.env.PORT;
db();
//rest api
app.get("/", (req, res) => {
  res.send({
    message: `welcomd`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
