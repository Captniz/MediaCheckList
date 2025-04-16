import mongoose from "mongoose";
import { Game } from "../../../types/item";

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    achievementNumber : {
        type: Number,
        required: false,
        default: 0
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
    achievements : {
        type: Number,
        required: false,
        default: 0
    },
    feltCompletion : {
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

export default mongoose.model<Game>('Game', gameSchema);