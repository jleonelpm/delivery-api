const jwt = require("jsonwebtoken");
require('dotenv').config();

function authMiddleware(req, res, next) {
  //const token = req.header("Authorization");
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  console.log(process.env.JWTSECRET);
  if (!token) {
    return res.status(401).send("No token provided");
  }

  try {
    //console.log("se intenta ingresar")
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded;
    //console.log(req.decoded);
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
}

module.exports = authMiddleware;
