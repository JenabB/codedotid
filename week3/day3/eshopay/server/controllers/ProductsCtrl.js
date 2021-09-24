import { sequelize } from "../models/schemas/IndexModels";

const findAllProducts = async (req, res) => {
  try {
    const result = await req.context.models.products.findAll();
    return res.send(result);
  } catch (error) {
    return res.sendStatus(404).send("no data found");
  }
};

export default {
  findAllProducts,
};
