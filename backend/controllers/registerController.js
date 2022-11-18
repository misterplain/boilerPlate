const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
// const generateToken = require("../utils/generateToken.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// @desc Create a new user
// @route POST /register
// @access Private
const registerUser = asyncHandler(async (req, res) => {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
  
    const duplicate = await User.findOne({ email: email }).lean().exec();
    if (duplicate) {
      return res
        .status(400)
        .json({ message: "User already exists, please try another email" });
    }
    const userObject = {
      name: name,
      password: password,
      email: email,
    };
  
    // create and store new user
    const user = await User.create(userObject);
    if (user) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );
  
    //   const refreshToken = jwt.sign(
    //     { email: user.email },
    //     process.env.REFRESH_TOKEN_SECRET,
    //     { expiresIn: "7d" }
    //   );
  
      // Create secure cookie with refresh token
      res.cookie("jwt", {
        httpOnly: true, //accessible only by web server
        secure: true, //https
        sameSite: "None", //cross-site cookie
        maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
      });
  
      // Send accessToken containing username and roles
      res.json({ accessToken });
    } else {
      res.status(400).json({ message: "Invalid user data received" });
    }
  });
  
  module.exports = { registerUser };