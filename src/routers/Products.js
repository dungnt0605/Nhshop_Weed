import { Router } from "express";
import { AddProduct, GetAllProduct } from "../components/product";

const product = Router();
product.get("/products", GetAllProduct);
product.post("/product", AddProduct);

export default product;
