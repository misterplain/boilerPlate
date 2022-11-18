// import express from "express";
// import dotenv from "dotenv";
// import colors from "colors";
// import connectDB from "./config/db.js";
// import {notFound, errorHandler} from "./middleware/errorMiddleware.js";
// import userRoutes from "./routes/userRoutes.js";

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db.js");
const {notFound, errorHandler} = require("./middleware/errorMiddleware.js");
const cors = require("cors");


const userRoutes = require("./routes/userRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const registerRoutes = require("./routes/registerRoutes.js");


dotenv.config();

connectDB();

const app = express();

app.use(cors("*"));

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/register", registerRoutes);

//error middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);