import Navbar from "../components/Navbar";
import ListElementBooks from "../components/ListElementBooks";
import ListElementManga from "../components/ListElementManga";
import ListElementSeries from "../components/ListElementSeries";
import ListElementFilm from "../components/ListElementFilm";
import ListElementGames from "../components/ListElementGames";
import HomeMediaSect from "../components/HomeMediaSection";
import { useEffect, useState } from "react";
import { Book, Anime, Manga, Film, Game, Series } from "../../../types/item";

const Home = () => {
	const [bookList, setBookList] = useState<Book[]>([]);
	const [mangaList, setMangaList] = useState<Manga[]>([]);
	const [animeList, setAnimeList] = useState<Anime[]>([]);
	const [seriesList, setSeriesList] = useState<Series[]>([]);
	const [filmList, setFilmList] = useState<Film[]>([]);
	const [gameList, setGameList] = useState<Game[]>([]);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
		};

		const fetchBooks = async () => {
			const response: Response = await fetch(
				"/api/books/search/?status=Active",
				requestOptions
			);
			const data = await response.json();

			if (response.ok) {
				setBookList(data.books);
			} else {
				console.error("Error fetching books:", data);
			}
		};

		const fetchManga = async () => {
			const response = await fetch(
				"/api/manga/search/?status=Active",
				requestOptions
			);
			const data = await response.json();

			if (response.ok) {
				setMangaList(data.manga);
			} else {
				console.error("Error fetching manga:", data);
			}
		};

		const fetchAnime = async () => {
			const response = await fetch(
				"/api/anime/search/?status=Active",
				requestOptions
			);
			const data = await response.json();

			if (response.ok) {
				setAnimeList(data.animes);
			} else {
				console.error("Error fetching anime:", data);
			}
		};

		const fetchSeries = async () => {
			const response = await fetch(
				"/api/series/search/?status=Active",
				requestOptions
			);
			const data = await response.json();

			if (response.ok) {
				setSeriesList(data.series);
			} else {
				console.error("Error fetching series:", data);
			}
		};

		const fetchFilm = async () => {
			const response = await fetch(
				"/api/films/search/?status=Active",
				requestOptions
			);
			const data = await response.json();

			if (response.ok) {
				setFilmList(data.films);
			} else {
				console.error("Error fetching films:", data);
			}
		};

		const fetchGames = async () => {
			const response = await fetch(
				"/api/games/search/?status=Active",
				requestOptions
			);
			const data = await response.json();

			if (response.ok) {
				setGameList(data.games);
			} else {
				console.error("Error fetching games:", data);
			}
		};

		fetchBooks();
		fetchManga();
		fetchAnime();
		fetchSeries();
		fetchFilm();
		fetchGames();
	}, []);

	return (
		<div className="home">
			<Navbar title="Home" path="/" />
			<HomeMediaSect sectionName="books" itemsFound={bookList.length || 0}>
				{bookList.map((book) => (
					<ListElementBooks
						title={book.title}
						author={book.author}
						totPages={book.pages}
						key={book._id}
						readPages={book.readPages}
						status={book.status}
						genre={book.genre}
						notes={book.notes}
						saga={book.saga}
						date={book.releaseDate}
						description={book.description}
						ctr={bookList.indexOf(book) + 1}
					/>
				))}
			</HomeMediaSect>
			<HomeMediaSect sectionName="manga" itemsFound={mangaList.length || 0}>
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
			</HomeMediaSect>
			<HomeMediaSect sectionName="series" itemsFound={seriesList.length || 0}>
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
			</HomeMediaSect>
			<HomeMediaSect sectionName="anime" itemsFound={animeList.length|| 0}>
			{animeList.map((anime) => (
					<ListElementSeries
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
			</HomeMediaSect>
			<HomeMediaSect sectionName="games" itemsFound={gameList.length|| 0}>
			{gameList.map((game) => (
					<ListElementGames
						title={game.title}
						author={game.author}
						achievements={game.achievements}
						achievementNumber={game.achievementNumber}
						key={game._id}
						feltCompletion={game.feltCompletion}
						status={game.status}
						genre={game.genre}
						notes={game.notes}
						saga={game.saga}
						date={game.releaseDate}
						description={game.description}
						ctr={gameList.indexOf(game) + 1}
					/>
				))}
			</HomeMediaSect>
			<HomeMediaSect sectionName="movies" itemsFound={filmList.length|| 0}>
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
			</HomeMediaSect>
			<br/> {/* Mi son cagato il cazzo dei padding */}
		</div>
	);
};

export default Home;
