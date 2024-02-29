// import sequelize
import { Sequelize } from "sequelize";
import "dotenv/config";

const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;


// create connection
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  // Choose one of the logging options
  // logging: console.log,                  // Default, displays the first parameter of the log function call
  // logging: (...msg) => console.log(msg), // Displays all log function call parameters
 logging: false,                        // Disables logging
  // logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
  // logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages
  host: DB_HOST,
  dialect: "mysql",
  timezone: '+07:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// export connection
export default db;
