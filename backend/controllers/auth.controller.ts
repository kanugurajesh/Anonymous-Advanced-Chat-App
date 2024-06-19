import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken";

// Implementing signUp functionality of the application
export const signUp = async (req: Request, res: Response) => {
  try {
    // deserializing the values from the frontend
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    // returning the error if both the password and confirmPassword do not match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    // checking whether the userName is present in the database
    const user = await User.findOne({ userName });

    // if the user is already present then we return error
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // HASH PASSWORD HERE

    // we are creating a salt with number 10 the greater the number the more secure it is but it takes more time so we are taking only 19
    const salt = await bcrypt.genSalt(10);
    // now we are hashing the password
    const hashedPassword = await bcrypt.hash(password, salt);

    // The below ones are used for setting the profile photos for the users
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    // https://avatar.iran.liara.run/public/boy

    // creating the new user with all the fields passed by ther user and storing the hased password in the database as it is more secure
    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    // after the user has been created we are setting a cookie and sending the details back to the frontend
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error: any) {
    console.log("Error in singup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Implementing login function of the application
export const login = async (req: Request, res: Response) => {
  try {
    // deserializing the fields from the frontend
    const { userName, password } = req.body;

    // checking whether the user exists in the database
    const user = await User.findOne({ userName });

    // if the user does not exist we are returning an error
    if (!user) {
      return res.status(400).json({ error: "user does not exist" });
    }

    // we are comparing the password given by user and the password in the database using bcrypt
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // if the password do not match we are raising an error
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "password is not correct" });
    }

    // creating a cookie
    generateTokenAndSetCookie(user._id, res);

    // sending the details of the user to the frontend
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error: any) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error " });
  }
};

// Implementing the logout functionality of the application
export const logOut = async (req: Request, res: Response) => {
  try {
    // removing the cookie
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error: any) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error " });
  }
};
