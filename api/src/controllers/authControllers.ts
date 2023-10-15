import { Request, Response } from "express";
import { db } from "../config/database";

export const register = (req: Request, res: Response) => {
  const q = "INSERT INTO user (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json({ message: "user has been created!" });
  });
};

export const login = (req: Request, res: Response) => {};
