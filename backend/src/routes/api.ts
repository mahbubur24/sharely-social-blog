import express from "express";
import {
  deleteUser,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/authControllers";

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);

export default router;
