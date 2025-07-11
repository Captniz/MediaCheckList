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
				setBookList(data.elements);
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
				setMangaList(data.elements);
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
				setAnimeList(data.elements);
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
				setSeriesList(data.elements);
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
				setFilmList(data.elements);
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
				setGameList(data.elements);
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

	const handleAddPage = async (
		apiName: string,
		id: string,
		_field: string,
		incValue: number
	) => {
		const url = `/api/${apiName}/${id}/increment`;

		const requestOptions = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				field: _field,
				value: incValue,
			}),
		};

		try {
			const response: Response = await fetch(url, requestOptions);
			const data = await response.json();

			if (response.ok) {
				console.log(`${_field} incremented successfully`, data);

				const updateList = <T extends { _id: string }>(
					list: T[],
					setList: React.Dispatch<React.SetStateAction<T[]>>
				) => {
					setList((prev) =>
						prev.map((item) =>
							item._id === id
								? {
										...item,
										[_field]: ((item as any)[_field] ?? 0) + incValue,
								  }
								: item
						)
					);
				};

				switch (apiName) {
					case "books":
						updateList(bookList, setBookList);
						break;
					case "manga":
						updateList(mangaList, setMangaList);
						break;
					case "anime":
						updateList(animeList, setAnimeList);
						break;
					case "series":
						updateList(seriesList, setSeriesList);
						break;
					case "films":
						updateList(filmList, setFilmList);
						break;
					case "games":
						updateList(gameList, setGameList);
						break;
				}

				return data.elements;
			} else {
				console.error(`Error incrementing ${_field}:`, data);
				return null;
			}
		} catch (err) {
			console.error("Request failed:", err);
			return null;
		}
	};

	const createIncrementFn = (apiName: string) => {
		return (id: string, field: string, incValue: number) =>
			handleAddPage(apiName, id, field, incValue);
	};

	const incrementBooks = createIncrementFn("books");
	const incrementManga = createIncrementFn("manga");
	const incrementAnime = createIncrementFn("anime");
	const incrementSeries = createIncrementFn("series");
	const incrementFilm = createIncrementFn("films");
	const incrementGames = createIncrementFn("games");

	return (
		<div className="home">
			<Navbar title="Home" path="/" />
			<HomeMediaSect sectionName="books" itemsFound={bookList.length || 0}>
				{bookList.map((book) => (
					<ListElementBooks
						{...book}
						ctr={bookList.indexOf(book) + 1}
						onIncrement={incrementBooks}
					/>
				))}
			</HomeMediaSect>
			<HomeMediaSect sectionName="manga" itemsFound={mangaList.length || 0}>
				{mangaList.map((manga) => (
					<ListElementManga
						{...manga}
						ctr={mangaList.indexOf(manga) + 1}
						onIncrement={incrementManga}
					/>
				))}
			</HomeMediaSect>
			<HomeMediaSect sectionName="series" itemsFound={seriesList.length || 0}>
				{seriesList.map((series) => (
					<ListElementSeries
						{...series}
						ctr={seriesList.indexOf(series) + 1}
						onIncrement={incrementSeries}
					/>
				))}
			</HomeMediaSect>
			<HomeMediaSect sectionName="anime" itemsFound={animeList.length || 0}>
				{animeList.map((anime) => (
					<ListElementSeries
						{...anime}
						ctr={animeList.indexOf(anime) + 1}
						onIncrement={incrementAnime}
					/>
				))}
			</HomeMediaSect>
			<HomeMediaSect sectionName="games" itemsFound={gameList.length || 0}>
				{gameList.map((game) => (
					<ListElementGames
						{...game}
						ctr={gameList.indexOf(game) + 1}
						onIncrement={incrementGames}
					/>
				))}
			</HomeMediaSect>
			<HomeMediaSect sectionName="movies" itemsFound={filmList.length || 0}>
				{filmList.map((film) => (
					<ListElementFilm
						{...film}
						ctr={filmList.indexOf(film) + 1}
						onIncrement={incrementFilm}
					/>
				))}
			</HomeMediaSect>
			<br /> {/* Mi son cagato il cazzo dei padding */}
		</div>
	);
};

export default Home;
