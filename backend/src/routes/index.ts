import express from "express";
import apiRouter from "./api";

const router = express.Router();

router.use("/api/v1/test", apiRouter);

export default router;
