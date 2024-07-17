import { StatusCodes } from "http-status-codes";
import { Category } from "../models/Category";
import slugify from "slugify";

export const GetAllCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const GetByIdCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const CreateCategory = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.categoryName, {
      lower: true,
      replacement: "_",
    });
    const category = await Category.create(req.body);
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const UpdateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res
      .status(StatusCodes.OK)
      .json({ messager: "Update done !!", category });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const RemoveCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json({ messager: "Delete done !!", category });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
