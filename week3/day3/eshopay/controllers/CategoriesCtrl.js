import { sequelize } from "../models/schemas/IndexModels";

const findCategoryBySQL = async (req, res) => {
  try {
    const result = await sequelize.query(
      "select cate_id,cate_name from categories",
      {
        type: sequelize.QueryTypes.SELECT,
        model: req.context.models.categories,
        mapToModel: true,
      }
    );

    return res.send(result);
  } catch (error) {
    res.send(error);
  }
};

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
    res.send(error);
  }
};

const createCategory = async (req, res) => {
  const { cate_id, cate_name } = req.body;

  try {
    const result = await req.context.categories.create({
      cate_id: cate_id,
      cate_name: cate_name,
    });
    return res.send("created" + result);
  } catch (error) {
    res.send(error);
  }
};

const updateCategory = async (req, res) => {
  const { cate_name } = req.body;
  try {
    const result = await req.context.categories.update(
      { cate_name: cate_name },
      { returning: true, where: { cate_id: req.params.id } }
    );
    return res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const result = await req.context.categories.destroy({
      where: { cate_id: id },
    });
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

export default {
  findCategoryBySQL,
  findAll,
  findCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
