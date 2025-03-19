import { Stats } from "fs";
import mongoose from "mongoose";
import { title } from "process";

const Schema = mongoose.Schema;

const filmSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    duration : {
        type: Number,
        required: true
    },
    genre : {
        type: String,
        required: true
    },
    saga : {
        type: String,
        required: false,
        default: 'None'
    },
    releaseDate : {
        type: Date,
        required: false,
        default: Date.UTC(1970, 0, 1)
    },
    status : {
        type: String,
        required: false,
        default: 'Not Started'
    },
    description : {
        type: String,
        required: false,
        default: ''
    },
    notes : {
        type: String,
        required: false,
        default: ''
    }
}, {timestamps: true});

module.exports = mongoose.model('Film', filmSchema);