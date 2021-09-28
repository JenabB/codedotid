import { Router } from "express";
import IndexCtrl from "../controllers/IndexCtrl";

const router = Router();

router.get("/", IndexCtrl.ProductsCtrl.findAllProducts);
router.get("/images/:fileName", IndexCtrl.ProductsCtrl.showProductImage);
router.get("/:id", IndexCtrl.ProductsCtrl.findProductById);

// //post
router.post("/", IndexCtrl.ProductsCtrl.createProduct);

//put
router.put("/:id", IndexCtrl.ProductsCtrl.updateProduct);

//delete
router.delete("/:id", IndexCtrl.ProductsCtrl.deleteProduct);

export default router;
