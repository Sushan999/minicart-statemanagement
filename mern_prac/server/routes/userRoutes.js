import express from "express";
import {
  createUser,
  getProfile,
  signIn,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const userRoutes = express();
userRoutes.post("/signup", createUser);
userRoutes.post("/signin", signIn);
userRoutes.get("/profile", auth, getProfile);

export default userRoutes;
