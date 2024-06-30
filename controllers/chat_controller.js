import { chatModel } from "../models/chat_model.js";

// Send a message
export const sendMessage = async (req, res, next) => {
    try {
        // send a message 
        const sentMessage = await chatModel.create(req.body);
        // return response
        res.status(201).json(`${sentMessage} sent to recipient`);
    } catch (error) {
        next(error);
    }
}

// Get all messages
export const getMessages = async (req, res, next) => {
    try {
    //   get all messages
    const retrieveMessages = await chatModel.find();
    // return response
    res.status(200).json(retrieveMessages)
    } catch (error) {
        next(error);
    }
}

// Get one message 
export const getMessage = async (req, res, next) => {
    try {
        // get a message
        const retrieveMessage = await chatModel.findById(req.params.id);
        // return response
        res.status(200).json(retrieveMessage)
    } catch (error) {
        next(error);
    }
}

// Update a message
export const updateMessage = async (req, res, next) => {
    try {
        // update a message
        const newUpdate = req.body;
        const updatedMessage = await chatModel.findByIdAndUpdate(req.params.id, newUpdate, {new: true});
        // return response
        res.status(201).json(updatedMessage);
    } catch (error) {
        next(error);
    }
}

// Delete a message 
export const deleteMessage = async (req, res, next) => {
    try {
        // delete a message
        const deletedMessage = await chatModel.findByIdAndDelete(req.params.id);
        // return response
        res.status(200).json(`${deletedMessage} deleted`);
    } catch (error) {
        next(error);
    }
}
