import { Anime } from "../../../types/item";
import ListElement from "../components/ListElementSeries";
import { defaultGenres, defaultStatuses } from "./_Constants";
import { createGeneralPage } from "./_GeneralPage";

const ListPage = createGeneralPage<Anime>({
	sectionName: "Anime",
	ListElementComponent: ListElement,
	filterOptions: {
		title: "",
		author: "",
		status: defaultStatuses,
		genre: defaultGenres,
		episodes: 0,
		watchedEpisodes: 0,
		saga: "",
	},
});

export default ListPage;
