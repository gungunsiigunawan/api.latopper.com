import express from "express";
import {
  VERIFY_TOKEN,
} from "../middleware/authJwt.js";
import { dashboard } from "../controllers/dashboard.controller.js";

const dashboardRoutes = express.Router();
dashboardRoutes.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  res.header("x-powered-by", "latopper.com");
  next();
});
dashboardRoutes.post(
  "/dashboard",
  [VERIFY_TOKEN],
  dashboard
);
//dashboardRoutes.get("/api/dashboard", dashboard);
export default dashboardRoutes;
