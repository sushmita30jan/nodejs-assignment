import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/users'; 

// User Registration
export const userRegister = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      res.status(400).send("User Already Registered");
      return;
    }

    user = new User({
      username: username,
      password: password,
    });

    await user.save();

    res.send("User Registered Successfully");
  } catch (error : any) {
    res.status(500).send(error.message || "Internal Server Error");
  }
};

// User Login
export const userLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).send("Invalid Username or Password");
      return;
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, "randomsecretKey", {
      expiresIn: "1h",
    });

    res.send(token);
  } catch (error : any) {
    res.status(500).send(error.message || "Internal Server Error");
  }
};
