import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListElementGames from "../components/ListElementGames";
import { Game } from "../../../types/item";
import "../styles/MediaPage.css";

const Games_ = () => {
	const [gameList, setGameList] = useState<Game[]>([]);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
		};

		const fetchGames = async () => {
			const response: Response = await fetch("/api/games/", requestOptions);
			const data = await response.json();

			if (response.ok) {
				setGameList(data.game);
			} else {
				console.error("Error fetching games:", data);
			}
		};

		fetchGames();
	}, []);

	const filters: string = "";
	const sort: string = "";
	const sectionName: string = "Games";
	const path: string = "/" + sectionName.toLowerCase();

	return (
		<div className="home">
			<Navbar title={sectionName} path={path} />
			<div className="page-header ">
				<div className="page-title-space">
					<h1 className="page-title">{sectionName}</h1>
					<h3 className="page-found">
						{" "}
						Found <i>{gameList.length || 0}</i>
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
				{gameList.map((game) => (
					<ListElementGames
						title={game.title}
						author={game.author}
						feltCompletion={game.feltCompletion}
						key={game._id}
						achievementNumber={game.achievementNumber}
						achievements={game.achievements}
						status={game.status}
						genre={game.genre}
						notes={game.notes}
						saga={game.saga}
						date={game.releaseDate}
						description={game.description}
						ctr={gameList.indexOf(game) + 1}
					/>
				))}
			</div>
		</div>
	);
};

export default Games_;
