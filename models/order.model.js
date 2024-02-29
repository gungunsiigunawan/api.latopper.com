import { DataTypes } from "sequelize";
import { UUIDV4 } from "sequelize";
import Db from "../config/db.config.js";

const Order = Db.define("orders", {
  orderId: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
    validate: {
      isUUID: 4,
    },
  },

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
