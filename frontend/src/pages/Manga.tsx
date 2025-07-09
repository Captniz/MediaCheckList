import { Manga } from "../../../types/item";
import ListElement from "../components/ListElementManga";
import { defaultGenres, defaultStatuses } from "./_Constants";
import { createGeneralPage } from "./_GeneralPage";

const ListPage = createGeneralPage<Manga>({
	sectionName: "Manga",
	ListElementComponent: ListElement,
	filterOptions: {
		title: "",
		author: "",
		status: defaultStatuses,
		genre: defaultGenres,
		chapters: 0,
		readChapters: 0,
		saga: "",
	},
});

export default ListPage;
