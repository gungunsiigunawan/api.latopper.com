import User from "../models/user.model.js";

export const dashboard = async (req, res) => {
  try {
    //console.log(`Request Dashboard User : { "userid" : ${req.userId} } `);

    const user = await User.findOne({
      where: {
        id: req.userId,
      },
    });

    if (!user) {
      return res.status(401).send({ message: "Invalid User!" });
    }

    return res
      .status(200)
      .send({ status: "sukses", message: `Wellcome ${user.username}` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
