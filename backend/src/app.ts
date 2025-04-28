import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(/(.*)/, (req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
