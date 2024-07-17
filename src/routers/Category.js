import { Router } from "express";
import { CreateCategory, GetAllCategory, GetByIdCategory, RemoveCategory, UpdateCategory } from "../components/Category";

const category = Router();

category.get("/category", GetAllCategory);
category.post("/category", CreateCategory);
category.get("/category/:id", GetByIdCategory);
category.put("/category/:id", UpdateCategory);
category.delete("/category/:id", RemoveCategory);

export default category;
