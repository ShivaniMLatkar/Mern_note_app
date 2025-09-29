import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
connectDB().then(() => {
    app.listen(PORT, () =>{
    console.log("Server started in port:", PORT);
});
});

app.use(express.json()); //this middleware will parse JSON bodies: req.body
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

// //const express = require("express");

// const app = express();

// app.get("/api/notes",(req, res) => {
//     //get existing notes
//     res.status(200).send("you got 10 notes");
// });
// app.post("/api/notes",(req, res) => {
//     //send notes to server
//     res.status(201).json({message:"Your note has been created successfully"})
// });
// app.update("/api/notes/:id",(req, res) => {
//     //send notes to server
//     res.status(202).json({message:"Your note updated successfully"})
// });

// app.delete("/api/notes/:id",(req, res) => {
//     //send notes to server
//     res.status(202).json({message:"Your note deleted successfully"})
// });



