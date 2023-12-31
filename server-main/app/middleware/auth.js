import jwt from "jsonwebtoken";
import config from "../config";

const auth = (req, res, next) => {
  console.log(req);
  let token = req.headers["x-auth-token"] || req.headers["authorization"];
  console.log(token);
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    req.user = jwt.verify(token, config.JwtSecret);
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

export default auth;
