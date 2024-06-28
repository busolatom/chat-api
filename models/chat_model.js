import { Schema, model } from "mongoose";
import normalize from 'normalize-mongoose';


const chatSchema = new Schema({
    userName: {type: String, required: true},
    message: {type: String, required: true}
},{
    timestamps: true
})

chatSchema.plugin(normalize);

export const chatModel = model('Message', chatSchema) 



