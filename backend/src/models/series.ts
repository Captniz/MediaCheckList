import mongoose from "mongoose";
import { Series } from "../../../types/item";

const Schema = mongoose.Schema;

const seriesSchema = new Schema({
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
    watchedEpisodes : {
        type: Number,
        required: false,
        default: 0
    },
    description : {
        type: String,
        required: false,
        default: ''
    }
}, {timestamps: true});

export default mongoose.model<Series>('Series', seriesSchema);