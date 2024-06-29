import { Schema, model } from "mongoose";
import {toJSON} from '@reis/mongoose-to-json';


const chatSchema = new Schema({
    senderId: {type: String},
    recipientId: {type: String},
    message: {type: String, required: true},
    sentAt: {type: Date, default: Date.now()},
    readStatus: {type: Boolean, default: false}
})

chatSchema.plugin(toJSON);

export const chatModel = model('message', chatSchema) 



