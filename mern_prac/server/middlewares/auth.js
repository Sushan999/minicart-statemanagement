import jwt from "jsonwebtoken";
import User from "../models/User.js";

const auth = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  const token = header.split(" ")[1];

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decode.id);

    if (!user)
      res.status(404).json({ success: false, message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Unauthorized" });
  }
};

export default auth;
