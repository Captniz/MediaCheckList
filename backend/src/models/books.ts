import mongoose from "mongoose";
import { Book } from "../../../types/item";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		pages: {
			type: Number,
			required: true,
		},
		genre: {
			type: String,
			required: true,
		},
		releaseDate: {
			type: Date,
			required: false,
			default: Date.UTC(1970, 0, 1),
		},
		status: {
			type: String,
			required: false,
			default: "Not Started",
		},
		readPages: {
			type: Number,
			required: false,
			default: 0,
		},
		description: {
			type: String,
			required: false,
			default: "",
		},
		saga: {
			type: String,
			required: false,
			default: "None",
		},
		notes: {
			type: String,
			required: false,
			default: "",
		},
	},
	{ timestamps: true }
);

export default mongoose.model<Book>("Book", bookSchema);
