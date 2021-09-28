const findAllCart = async (req, res) => {
  try {
    const result = await req.context.models.carts.findAll();
    return res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const findCartById = async (req, res) => {
  try {
    const result = await req.context.models.carts.findByPk(req.params.id);
    return res.send(result);
  } catch (error) {
    res.send("Not found");
  }
};

const createCart = async (req, res) => {
  const { cart_status, cart_user_id } = req.body;

  try {
    const result = await req.context.models.carts.create({
      cart_createdon: new Date(),
      cart_status: cart_status,
      cart_user_id: cart_user_id,
    });
    return res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const deleteCart = async (req, res) => {
  const id = req.params.id;
  try {
    await req.context.models.carts.destroy({
      where: { cart_id: id },
    });
    return res.send("cart deleted");
  } catch (error) {
    return res.send(error);
  }
};

export default { findAllCart, findCartById, createCart, deleteCart };
