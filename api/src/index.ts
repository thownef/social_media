import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { db } from "./config/database";
import authRoutes from "./routes/authRoutes";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());

db.connect((err) => {
  if (err) {
    console.error("Error connect :", err);
  } else {
    console.log("Connect DB success");
  }
});

app.use("/api/auth", authRoutes);

app.listen(8080, () => {
  console.log("Backend server is running");
});
