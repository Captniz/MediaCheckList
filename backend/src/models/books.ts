import { Stats } from "fs";
import mongoose from "mongoose";
import { title } from "process";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    pages : {
        type: Number,
        required: true
    },
    genre : {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true
    },
    readPages : {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Book', bookSchema);