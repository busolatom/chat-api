import { Router } from "express";
import { deleteMessage, getMessage, getMessages, readStatus, sendMessage, updateMessage } from "../controllers/chat_controller.js";

// create router
const chatRouter = Router();

// define routes
chatRouter.post('/chat', sendMessage)

chatRouter.get('/chat', getMessages)

chatRouter.get('/chat/:id', getMessage)

chatRouter.patch('/chat/:id', updateMessage)

chatRouter.delete('/chat/:id', deleteMessage)

chatRouter.patch('/chatread/:id', readStatus)

// export router 
export default chatRouter;