import express from "express";
import chatRouter from "./routes/chat_route.js";
import mongoose from "mongoose";

// connect to database
mongoose.connect(process.env.Mongo_url)
.then(() => console.log('Connected to the database'));

// Create express app
const chatapp = express();

// Apply middleware to unwrap user data
chatapp.use(express.json());

// Enable router use
chatapp.use(chatRouter);

const port = 8090;

chatapp.listen( port, () => {
    console.log(`Chat App listening on port ${port}`)
});