import { Stats } from "fs";
import mongoose from "mongoose";
import { title } from "process";

const Schema = mongoose.Schema;

const animeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    episodes : {
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
    watchedEpisodes : {
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

export default mongoose.model('Anime', animeSchema);