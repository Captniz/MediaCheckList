import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListElementAnime from "../components/ListElementSeries";
import { Anime } from "../../../types/item";
import "../styles/MediaPage.css";

const Anime_ = () => {
	const [animeList, setAnimeList] = useState<Anime[]>([]);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
		};

		const fetchAnime = async () => {
			const response: Response = await fetch("/api/anime/", requestOptions);
			const data = await response.json();

			if (response.ok) {
				setAnimeList(data.anime);
			} else {
				console.error("Error fetching anime:", data);
			}
		};

		fetchAnime();
	}, []);

	const filters: string = "";
	const sort: string = "";
	const sectionName: string = "Anime";
	const path: string = "/" + sectionName.toLowerCase();

	return (
		<div className="home">
			<Navbar title={sectionName} path={path} />
			<div className="page-header ">
				<div className="page-title-space">
					<h1 className="page-title">{sectionName}</h1>
					<h3 className="page-found">
						{" "}
						Found <i>{animeList.length || 0}</i>
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
				{animeList.map((anime) => (
					<ListElementAnime
						title={anime.title}
						author={anime.author}
						totEpisodes={anime.episodes}
						key={anime._id}
						watchedEpisodes={anime.watchedEpisodes}
						status={anime.status}
						genre={anime.genre}
						notes={anime.notes}
						saga={anime.saga}
						date={anime.releaseDate}
						description={anime.description}
						ctr={animeList.indexOf(anime) + 1}
					/>
				))}
			</div>
		</div>
	);
};

export default Anime_;
