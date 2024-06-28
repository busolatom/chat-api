import { Schema, model } from "mongoose";

const chatSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    message: {type: String, required: true}
},{
    timestamps: true
})

export const chatModel = model('Message', chatSchema) 



