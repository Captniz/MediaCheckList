import mongoose from "mongoose";
import { Film } from "../../../types/item";

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
    watchedDuration : {
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

export default mongoose.model<Film>('Film', filmSchema);