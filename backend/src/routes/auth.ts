import express from "express";
import {
  forgotPassword,
  getUser,
  loginUser,
  logoutUser,
  registerUser,
  verifyOTP,
} from "../controllers/authControllers";
import { isAuthenticated } from "../middlewares/authMiddlewares";

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/verifyOTP", verifyOTP);
router.post("/loginUser", loginUser);
router.post("/logoutUser", isAuthenticated, logoutUser);
router.get("/getUser", isAuthenticated, getUser);
router.post("/forgotPassword", forgotPassword);

export default router;
