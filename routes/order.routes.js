import express from "express";
import {
  VERIFY_TOKEN,
} from "../middleware/authJwt.js";
import { order } from "../controllers/order.controller.js";

const orderRoutes = express.Router();
orderRoutes.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  res.header("x-powered-by", "latopper.com");
  next();
});
orderRoutes.post(
  "/orders",
  [VERIFY_TOKEN],
  order
);
export default orderRoutes;
