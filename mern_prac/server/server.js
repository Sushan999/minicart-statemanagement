import express from "express";
import connectDB from "./configs/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Workings");
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

app.listen(3000, () => {
  console.log("Working");
});
