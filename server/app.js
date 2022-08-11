require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");

const port = 3001;

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
