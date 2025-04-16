export interface ItemBase {
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	title: string;
	author: string;
	genre: string;
	status: string;
	saga: string;
	releaseDate: Date;
	description: string;
	notes: string;
}

export interface Manga extends ItemBase {
	chapters: number;
	readChapters: number;
}
export interface Anime extends ItemBase {
	episodes: number;
	watchedEpisodes: number;
}
export interface Game extends ItemBase {
	achievementNumber: number;
	achievements: number;
	feltCompletion: number;
}
export interface Book extends ItemBase {
	pages: number;
	readPages: number;
}
export interface Film extends ItemBase {
	duration: number;
	watchedDuration: number;
}
export interface Series extends ItemBase {
	episodes: number;
	watchedEpisodes: number;
}
