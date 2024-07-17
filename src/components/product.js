import { StatusCodes } from "http-status-codes";
import slugify from "slugify";
import Products from "../models/Products.js";

export const GetAllProduct = async (req, res) => {
  try {
    const product = await Products.find({});
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const GetByIdProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const RemoveProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json({ messager: "Delete done !", product });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const UpdateProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res
      .status(StatusCodes.OK)
      .json({ messager: "Update done !", product });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const AddProduct = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.productName, {
      lower: true,
      replacement: "_",
    });
    const product = await Products.create(req.body);
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
