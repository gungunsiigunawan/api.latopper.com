import User from "../models/user.model.js";

const CHECK_DUPLICATE_USERNAME = (req, res, next) => {
  try {
    if (!req.body.username) {
      return res.status(400).send({
        message: "Failed! Username required!",
      });
    }

    if (!req.body.password) {
      return res.status(400).send({
        message: "Failed! Password required!",
      });
    }

    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "Failed! Username is already in use!",
        });
        return;
      }
      next();
    });
  } catch (error) {
    return res.status(500).send({
      message: "Unable to validate Username!",
    });
  }
};

export default CHECK_DUPLICATE_USERNAME;
