import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      // lowercase: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    original_price: {
      type: Number,
      required: true,
      default: 0,
    },
    stock_quantity: {
      type: Number,
      default: 0,
    },
    main_image: {
      type: String,
    },
    additional_images: {
      type: Array,
    },
    description: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    details: {
      weight: String,
      color: String,
      origin: String,
      legal_age: Number,
      expiry_date: Date,
      usage_instructions: String,
    },

    // attributes: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Attribute",
    //     },
    // ],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Products", ProductSchema);
// {
//   "productName": "Green Weed Flower",
//   "slug": "green-weed-flower",
//   "categoryId": "60c71f61b9b1d80015f8f9be",
//   "original_price": 50.00,
//   "stock_quantity": 100,
//   "main_image": "http://example.com/images/green-weed-flower.jpg",
//   "additional_images": [
//     "http://example.com/images/green-weed-flower-1.jpg",
//     "http://example.com/images/green-weed-flower-2.jpg",
//   ],
//   "description": "High-quality green weed flower with 20% THC content.",
//   "featured": true,
//   "details": {
//     "weight": "1 gram",
//     "color": "Green",
//     "origin": "California, USA",
//     "legal_age": 21,
//     "expiry_date": "2023-07-01",
//     "usage_instructions": "Smoke responsibly"
//   }
// }
