import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // getting the jwt token from the browser
    const token = req.cookies.jwt;
    // if there is no token we are sending a error
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    // @ts-ignore
    // verifying the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // if the decoded is an error we are sending an error
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Inavlid Token" });
    }

    // @ts-ignore
    // finding the user based on the userId in the jwt token and removing password field
    const user = await User.findById(decoded.userId).select("-password");

    // if the user is not there we are sending an user not found error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // @ts-ignore
    // setting the user in the req to the user found
    req.user = user;

    // if everything is correct we are calling the next function to authorize the request
    next();
    // if the try block fails the catch block is called
  } catch (error: any) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
