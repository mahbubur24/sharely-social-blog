import express, { Request, Response } from "express";

const router = express.Router();

router.get("/check", (req: Request, res: Response) => {
  res.json({ message: "Hello from the API!" });
});

export default router;
