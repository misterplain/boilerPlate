// import express from "express";
const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware.js");

router.route("/users").get(getUserProfile).put(updateUserProfile);

module.exports = router;
