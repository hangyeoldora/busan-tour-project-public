const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors);
require("dotenv").config();

app.listen('3001', () => {
    console.log('running');
})