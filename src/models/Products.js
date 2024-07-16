import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
      lowercase: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    price: {
      type: Number,
      require: true,
    },
    categoryId: {
      type: String,
    },
    stockStatus: {
      type: Boolean,
    },
    thummand: {
      type: String,
    },
    galary: {
      type: Array,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Products = mongoose.model("Product", ProductSchema);
