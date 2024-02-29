import express from "express";
import helmet from "helmet";
import cookieSession from "cookie-session";
import authRoutes from "./routes/auth.routes.js";
import db from "./config/db.config.js";
import chalk from "chalk";
import morganBody from "morgan-body";
import apidocsRoutes from "./routes/api-docs.routes.js";
import http from "http"

const app = express();
morganBody(app);

// const corsOption = {
//   origin: "http://192.168.1.80",
// };

//app.use(cors());

app.use(helmet());
//app.use(cors(corsOption));
app.disable("x-powered-by");

app.use(express.json());
app.set("x-powered-by", "latopper.com");
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "app-session",
    secret: "COOKIE_SECRET",
    httpOnly: true,
  })
);

app.use(authRoutes);
app.use(apidocsRoutes);

try {
  await db.authenticate();
  db.sync({ alter: true }).then(() => {
    console.log(chalk.greenBright("Database Synch Complete!"));
  });
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/", (req, res) => {
  res.json({ message: "Welcome to api.latopper.com" });
});

const PORT = process.env.PORT || 8080;
http.createServer(app).listen(PORT, () => {
  console.log(chalk.greenBright(`Server is running on port ${PORT}.`));
});
