import { Router } from "express";
import IndexCtrl from "../controllers/IndexCtrl";

const router = Router();

router.get("/", IndexCtrl.CartsCtrl.findAllCart);
// router.get("/detail", IndexCtrl.CategoriesCtrl.cateProducts);
router.get("/:id", IndexCtrl.CartsCtrl.findCartById);

//post
router.post("/", IndexCtrl.CartsCtrl.createCart);

// //put
// router.put("/:id", IndexCtrl.CategoriesCtrl.updateCategory);

//delete
router.delete("/:id", IndexCtrl.CartsCtrl.deleteCart);

export default router;
