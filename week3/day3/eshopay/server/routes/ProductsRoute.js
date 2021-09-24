import { Router } from "express";
import IndexCtrl from "../controllers/IndexCtrl";

const router = Router();

router.get("/", IndexCtrl.ProductsCtrl.findAllProducts);
// router.get("/detail", IndexCtrl.CategoriesCtrl.cateProducts);
// router.get("/:id", IndexCtrl.CategoriesCtrl.findCategoryById);

// //post
// router.post("/", IndexCtrl.CategoriesCtrl.createCategory);

// //put
// router.put("/:id", IndexCtrl.CategoriesCtrl.updateCategory);

// //delete
// router.delete("/:id", IndexCtrl.CategoriesCtrl.deleteCategory);

export default router;