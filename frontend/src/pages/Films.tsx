import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListElementFilm from "../components/ListElementFilm";
import { Film } from "../../../types/item";
import "../styles/MediaPage.css";

const Books = () => {
	const [filmList, setFilmList] = useState<Film[]>([]);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
		};

		const fetchFilms = async () => {
			const response: Response = await fetch("/api/films/", requestOptions);
			const data = await response.json();

			if (response.ok) {
				setFilmList(data.film);
			} else {
				console.error("Error fetching films:", data);
			}
		};

		fetchFilms();
	}, []);

	const filters: string = "";
	const sort: string = "";
	const sectionName: string = "Movies";
	const path: string = "/" + sectionName.toLowerCase();

	return (
		<div className="home">
			<Navbar title={sectionName} path={path} />
			<div className="page-header ">
				<div className="page-title-space">
					<h1 className="page-title">{sectionName}</h1>
					<h3 className="page-found">
						{" "}
						Found <i>{filmList.length || 0}</i>
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
				{filmList.map((film) => (
					<ListElementFilm
						title={film.title}
						author={film.author}
						duration={film.duration}
						key={film._id}
						watchedDuration={film.watchedDuration}
						status={film.status}
						genre={film.genre}
						notes={film.notes}
						saga={film.saga}
						date={film.releaseDate}
						description={film.description}
						ctr={filmList.indexOf(film) + 1}
					/>
				))}
			</div>
		</div>
	);
};

export default Books;
