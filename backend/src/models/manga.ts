import mongoose from "mongoose";

const Schema = mongoose.Schema;
import { Manga } from "../../../types/item";

const mangaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    chapters : {
        type: Number,
        required: true
    },
    genre : {
        type: String,
        required: true
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
    readChapters : {
        type: Number,
        required: false,
        default: 0
    },
    description : {
        type: String,
        required: false,
        default: ''
    },
    saga : {
        type: String,
        required: false,
        default: 'None'
    },
    notes : {
        type: String,
        required: false,
        default: ''
    }
}, {timestamps: true});

export default mongoose.model<Manga>('Manga', mangaSchema);