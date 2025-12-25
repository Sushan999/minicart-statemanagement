import { Product } from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, model, description, quantity, image, price, rating } =
      req.body;

    const product = await Product.create({
      name,
      model,
      description,
      quantity,
      image,
      price,
      rating,
    });

    return res.status(200).json({
      success: true,
      message: "Product created Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products)
      return res
        .status(400)
        .json({ success: false, message: "No Products Found" });

    return res.status(200).json({
      success: "True",
      message: "Product fetch Successfull",
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
