import { Schema, model } from "mongoose";
import normalize from 'normalize-mongoose';


const chatSchema = new Schema({
    senderId: {type: String},
    recipientId: {type: String},
    // userName: {type: String, required: true},
    message: {type: String, required: true},
    sentAt: {type: Date, default: Date.now()},
    readStatus: {type: Boolean, default: false}
})

chatSchema.plugin(normalize);

export const chatModel = model('Message', chatSchema) 



