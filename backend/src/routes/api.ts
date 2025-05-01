import express from "express";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/authControllers";

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.post("/updateUser", updateUser);

export default router;
