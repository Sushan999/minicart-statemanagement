import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: String, default: 0 },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
