import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  verifyOTP,
} from "../controllers/authControllers";

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/verifyOTP", verifyOTP);
router.post("/loginUser", loginUser);
router.post("/logoutUser", logoutUser);

export default router;
