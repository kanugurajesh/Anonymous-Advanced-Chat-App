import { Request, Response } from "express";
import User from "../models/user.model";

export const getUsersForSidebar = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const loggedInUserId = req.user._id;

    // Getting all the user except me
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error: any) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
