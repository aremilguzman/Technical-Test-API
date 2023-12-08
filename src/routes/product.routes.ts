import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers";

const router = Router();

router.post("/product", createProduct);
router.get("/product", getProducts);
router.get("/product/:sku", getProduct);
router.put("/product/:sku", updateProduct);
router.delete("/product/:sku", deleteProduct);

export default router;
