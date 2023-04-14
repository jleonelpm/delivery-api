const express = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const router = express.Router();


router.post("/login", (req, res) => {
  //Getting the username and password from app 
  const username = req.body.username;
  const password = req.body.password;

  // Check if username and password are correct
  if (username === process.env.USER_APP && password === process.env.PASS_APP) {
    // Generate a JWT token
    const token = jwt.sign({ username }, process.env.JWTSECRET, { expiresIn: process.env.JWTEXPIRATION });
    res.json({ token });
  } else {
    res.status(401).send("Incorrect username or password");
  }
});

module.exports = router;
