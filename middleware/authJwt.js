import jwt, { decode } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export const VERIFY_TOKEN = (req, res, next) => {
  let token = req.session.token;
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      //console.log("Unauthorized");
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    //console.log(decoded)
    req.userId = decoded.id;
    next();
  });
};




