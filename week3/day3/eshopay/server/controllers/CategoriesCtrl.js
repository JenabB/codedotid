const findAll = async (req, res) => {
  try {
    const result = await req.context.models.categories.findAll();
    return res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const findCategoryById = async (req, res) => {
  try {
    const result = await req.context.models.categories.findByPk(req.params.id);
    return res.send(result);
  } catch (error) {
    res.send("Not found");
  }
};

const cateProducts = async (req, res) => {
  try {
    const result = await req.context.models.categories.findAll({
      include: [
        {
          model: req.context.models.products,
        },
      ],
    });
    return res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const createCategory = async (req, res) => {
  const { cate_name } = req.body;

  try {
    const result = await req.context.models.categories.create({
      cate_name: cate_name,
    });
    return res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const updateCategory = async (req, res) => {
  const { cate_name } = req.body;
  try {
    const result = await req.context.models.categories.update(
      { cate_name: cate_name },
      { returning: true, where: { cate_id: req.params.id } }
    );
    return res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    await req.context.models.categories.destroy({
      where: { cate_id: id },
    });
    return res.send("deleted");
  } catch (error) {
    return res.send(error);
  }
};

export default {
  findAll,
  findCategoryById,
  cateProducts,
  createCategory,
  updateCategory,
  deleteCategory,
};
