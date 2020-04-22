const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { hash, compare } = require("bcryptjs");
const { verify } = require("jsonwebtoken");

//setup register
//setup login
//setup logout
//setup protected route
//setup access and refresh token

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ msg: "hello world" }));

app.listen(3000, () => console.log(`Server running on port 3000`));
