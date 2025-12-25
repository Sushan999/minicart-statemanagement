import express from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

const productRoutes = express();

productRoutes.post("/create", createProduct);
productRoutes.get("/products", getProducts);

export default productRoutes;
