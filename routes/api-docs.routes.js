import express from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from '../swaggerDefinition.js';

const apidocsRoutes = express.Router();
apidocsRoutes.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  res.header("x-powered-by", "latopper.com");
  next();
});

// Swagger options
const options = {
  swaggerDefinition,
  apis: ['./swagger/*.js'], // Update with the path to your route files
};

const swaggerSpec = swaggerJsdoc(options);

// Serve Swagger documentation using Swagger UI
apidocsRoutes.use("/docs", swaggerUi.serve);
apidocsRoutes.get("/docs", swaggerUi.setup(swaggerSpec));

export default apidocsRoutes;
