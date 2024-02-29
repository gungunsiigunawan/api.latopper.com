import { DataTypes } from "sequelize";
import Db from "../config/db.config.js";

const User = Db.define("users", {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default User;
