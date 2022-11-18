const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// @desc    Auth user & get token
// @route   POST /login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    const foundUser = await User.findOne({ email }).exec();
  
    if (!foundUser) {
      return res.status(401).json({ message: "Unauthorized can't find user" });
    }
  
    const match = await bcrypt.compare(password, foundUser.password);
  
    if (!match)
      return res
        .status(401)
        .json({ message: "Unauthorized passwords not a match" });
  
    const accessToken = jwt.sign(
      {
        id: foundUser._id,
        email: foundUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

  
    // Create secure cookie with refresh token
    res.cookie("jwt", {
      httpOnly: true, //accessible only by web server
      secure: false, //https
      sameSite: "None", //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });
  
    // Send accessToken containing username and roles
    res.json({ accessToken });
  });
  
  module.exports = { authUser };