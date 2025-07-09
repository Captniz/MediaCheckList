import { Game } from "../../../types/item";
import ListElement from "../components/ListElementGames";
import { defaultGenres, defaultStatuses } from "./_Constants";
import { createGeneralPage } from "./_GeneralPage";

const ListPage = createGeneralPage<Game>({
	sectionName: "Games",
	ListElementComponent: ListElement,
	filterOptions: {
		title: "",
		author: "",
		status: defaultStatuses,
		genre: defaultGenres,
		pages: 0,
		readPages: 0,
		saga: "",
	},
});

export default ListPage;
