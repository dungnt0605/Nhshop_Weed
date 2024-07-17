import { Router } from "express";
import {
  AddProduct,
  GetAllProduct,
  GetByIdProduct,
  RemoveProduct,
  UpdateProduct,
} from "../components/product";

const product = Router();
product.get("/products", GetAllProduct);
product.get("/product/:id", GetByIdProduct);
product.delete("/product/:id", RemoveProduct);
product.post("/product", AddProduct);
product.put("/product/:id", UpdateProduct);

export default product;
