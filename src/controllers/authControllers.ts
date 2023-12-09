import { Request, Response } from "express";
import { db } from "../config/database";

export const register = async (req: Request, res: Response) => {
  const q =
    "INSERT INTO user (`firstname`,`lastname`, `email`, `password`,`gender`) VALUES (?)";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.password,
    req.body.gender,
  ];

  try {
    await db.query(q, [values]);
    res.status(200).json({ message: "user has been created!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const q = "SELECT * FROM user WHERE email = ?";
  try {
    const [row] = await db.query(q, [req.body.email]);
    if ((row as any).length === 0) {
      res.status(404).json({ message: "User not found!" });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
