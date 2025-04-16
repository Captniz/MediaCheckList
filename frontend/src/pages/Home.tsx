import Navbar from "../components/Navbar";
import ListElementReading from "../components/ListElementReading";
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
				setAnimeList(data);
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
				setSeriesList(data);
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
				setFilmList(data);
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
				setGameList(data);
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
			<HomeMediaSect sectionName="books" itemsFound={bookList.length}>
				{bookList.map((book) => (
					<ListElementReading
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
			<HomeMediaSect sectionName="manga" itemsFound={100}>
				pass
			</HomeMediaSect>
			<HomeMediaSect sectionName="series" itemsFound={100}>
				pass
			</HomeMediaSect>
			<HomeMediaSect sectionName="anime" itemsFound={100}>
				pass
			</HomeMediaSect>
			<HomeMediaSect sectionName="games" itemsFound={100}>
				pass
			</HomeMediaSect>
			<HomeMediaSect sectionName="movies" itemsFound={100}>
				pass
			</HomeMediaSect>
		</div>
	);
};

export default Home;
