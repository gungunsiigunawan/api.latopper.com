import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const SECRET = process.env.JWT_SECRET;

export const signup = async (req, res) => {
  // save user to database
  try {
    const user = await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.status(200).send({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(401).send({ message: "Invalid User or Password" });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid User or Password" });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      SECRET,
      {
        expiresIn: 86400, // 24 hours
      }
    );

    // send token at session
    req.session.token = token;

    return res.status(200).send({
      status: "sukses",
      token: token
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!",
    });
  } catch (err) {
    this.next(err);
  }
};
