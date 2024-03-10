import mongoose from "mongoose";
import shortid from "shortid";

export const Url = mongoose.model('Url', new mongoose.Schema({
    full:{
        type: String,
        required: true
    },
    short: {
        type: String, 
        required: true,
        default: shortid.generate
    },
    qrText: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
}));