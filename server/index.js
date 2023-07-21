const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(express.static("public"));
require("dotenv").config();

const mainRouter = require("./routes/main");
app.use("/api", mainRouter);

app.listen('3002', () => {
    console.log('running');
})