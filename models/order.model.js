import { DataTypes } from "sequelize";
import Db from "../config/db.config.js";

const Order = Db.define("orders", {
  name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  notes: {
    type: DataTypes.STRING,
  },
  themeId: {
    type: DataTypes.STRING,
  },
});

export default Order;
