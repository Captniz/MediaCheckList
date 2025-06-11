import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListElementSeries from "../components/ListElementSeries";
import { Series } from "../../../types/item";
import "../styles/MediaPage.css";

const Series_ = () => {
	/**
	 * Series Page Component
	 * Displays a list of series with their details
	 */


	// State to hold the list of series
	const [seriesList, setSeriesList] = useState<Series[]>([]);
	
	// Fetch series data from the API when the component mounts
	useEffect(() => {
		const requestOptions = {
			method: "GET",
		};

		const fetchSeries = async () => {
			const response: Response = await fetch("/api/series/", requestOptions);
			const data = await response.json();

			if (response.ok) {
				setSeriesList(data.elements);
			} else {
				console.error("Error fetching series:", data);
			}
		};

		fetchSeries();
	}, []);

	// Filters, sort options, and section name
	const filters: string = "";
	const sort: string = "";
	const sectionName: string = "Series";
	const path: string = "/" + sectionName.toLowerCase();

	return (
		<div className="home">
			<Navbar title={sectionName} path={path} />
			<div className="page-header ">
				<div className="page-title-space">
					<h1 className="page-title">{sectionName}</h1>
					<h3 className="page-found">
						{" "}
						Found <i>{seriesList.length || 0}</i>
						{filters === "" ? "" : <b>{filters}</b>} {sectionName}
					</h3>
				</div>
				<div className="page-filters">
					<p>
						Press <span>/</span> to search
					</p>
					<p className="sep"></p>
					<button>Filter</button>
					<button>Sort</button>
				</div>
			</div>
			<div className="media-page">
				{seriesList.map((series) => (
					<ListElementSeries
						title={series.title}
						author={series.author}
						totEpisodes={series.episodes}
						key={series._id}
						watchedEpisodes={series.watchedEpisodes}
						status={series.status}
						genre={series.genre}
						notes={series.notes}
						saga={series.saga}
						date={series.releaseDate}
						description={series.description}
						ctr={seriesList.indexOf(series) + 1}
					/>
				))}
			</div>
		</div>
	);
};

export default Series_;
