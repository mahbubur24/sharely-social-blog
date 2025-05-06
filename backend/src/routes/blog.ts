import express, { Request, Response } from "express";

const router = express.Router();

router.post("/postBlog", (req: Request, res: Response) => {
  // Logic to post a blog
  res.status(200).json({ message: "Blog posted successfully" });
});

export default router;
