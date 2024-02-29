import express from "express";
import { signin, signout, signup } from "../controllers/auth.controller.js";
import CHECK_DUPLICATE_USERNAME_OR_EMAIL from "../middleware/verifySignUp.js";

const authRoutes = express.Router();

authRoutes.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  res.header("x-powered-by", "latopper.com");
  next();
});

authRoutes.post(
  "/auth/signup",
  [
    //CHECK_DUPLICATE_USERNAME_OR_EMAIL
  ],
  signup
);

authRoutes.post("/auth/signin", signin);
authRoutes.post("/auth/signout", signout);

export default authRoutes;
