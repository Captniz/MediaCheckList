import { Film } from "../../../types/item";
import ListElement from "../components/ListElementFilm";
import { defaultGenres, defaultStatuses } from "./_Constants";
import { createGeneralPage } from "./_GeneralPage";

const ListPage = createGeneralPage<Film>({
	sectionName: "Films",
	ListElementComponent: ListElement,
	filterOptions: {
		title: "",
		author: "",
		status: defaultStatuses,
		genre: defaultGenres,
		duration: 0,
		watchedDuration: 0,
		saga: "",
	},
});

export default ListPage;
