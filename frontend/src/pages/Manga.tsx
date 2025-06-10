import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListElementManga from "../components/ListElementManga";
import { Manga } from "../../../types/item";
import "../styles/MediaPage.css";

const Mangas = () => {
	const [mangaList, setMangaList] = useState<Manga[]>([]);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
		};

		const fetchManga = async () => {
			const response: Response = await fetch("/api/manga/", requestOptions);
			const data = await response.json();

			if (response.ok) {
				setMangaList(data.manga);
			} else {
				console.error("Error fetching manga:", data);
			}
		};

		fetchManga();
	}, []);

	const filters: string = "";
	const sort: string = "";
	const sectionName: string = "Manga";
	const path: string = "/" + sectionName.toLowerCase();

	return (
		<div className="home">
			<Navbar title={sectionName} path={path} />
			<div className="page-header ">
				<div className="page-title-space">
					<h1 className="page-title">{sectionName}</h1>
					<h3 className="page-found">
						{" "}
						Found <i>{mangaList.length || 0}</i>
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
				{mangaList.map((manga) => (
					<ListElementManga
						title={manga.title}
						author={manga.author}
						totChapters={manga.chapters}
						key={manga._id}
						readChapters={manga.readChapters}
						status={manga.status}
						genre={manga.genre}
						notes={manga.notes}
						saga={manga.saga}
						date={manga.releaseDate}
						description={manga.description}
						ctr={mangaList.indexOf(manga) + 1}
					/>
				))}
			</div>
		</div>
	);
};

export default Mangas;
