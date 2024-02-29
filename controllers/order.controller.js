import Orders from "../models/order.model.js";

export const order = async (req, res) => {
  try {
    const name = req.body.name ? req.body.name.toString().toLowerCase() : '';
    const address = req.body.address ? req.body.address.toString().toLowerCase() : '';
    const notes = req.body.notes ? req.body.notes.toString().toLowerCase() : '';
    const theme = req.body.theme ? req.body.theme.toString().toLowerCase() : '';

    const addOrder = await Orders.create({
      name: name,
      address: address,
      date: req.body.date,
      age: req.body.age,
      notes: notes,
      theme: theme
    });
    
    return res
      .status(200)
      .send({ status: "sukses", orderid: addOrder.id });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
