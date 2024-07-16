import { Products } from "../models/Products";

export const GetAllProduct = async (req, res) => {
  try {
    const product = await Products.find();
    return res.status(200).json(Products);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const AddProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json(error);
  }
};
