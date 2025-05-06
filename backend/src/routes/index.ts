import express from "express";
import authRouter from "./auth";
import blogRouter from "./blog";

const router = express.Router();

router.use("/api/v1/test", authRouter);
router.use("/api/v1/test", blogRouter);

export default router;
