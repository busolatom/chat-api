import express from "express";

const chatapp = express();

const port = 8090;

chatapp.listen( port, () => {
    console.log(`Chat App listening on port ${port}`)
});