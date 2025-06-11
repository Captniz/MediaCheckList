import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListElementBooks from "../components/ListElementBooks";
import { Book } from "../../../types/item";
import "../styles/MediaPage.css";

const Books = () => {
	const [bookList, setBookList] = useState<Book[]>([]);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
		};

		const fetchBooks = async () => {
			const response: Response = await fetch("/api/books/search?", requestOptions);
			const data = await response.json();

			if (response.ok) {
				setBookList(data.elements);
			} else {
				console.error("Error fetching books:", data);
			}
		};

		fetchBooks();
	}, []);

	const filters: string = "";
	const sort: string = "";
	const sectionName: string = "Books";
	const path: string = "/" + sectionName.toLowerCase();

	return (
		<div className="home">
			<Navbar title={sectionName} path={path} />
			<div className="page-header ">
				<div className="page-title-space">
					<h1 className="page-title">{sectionName}</h1>
					<h3 className="page-found">
						{" "}
						Found <i>{bookList.length || 0}</i>
						{filters === "" ? "" : <b>{filters}</b>} {sectionName}
					</h3>
				</div>
				<div className="page-filters">
					<p>
						Press <span>/</span> to search
					</p>
					<p className="sep"></p>
					<button >Filter</button>
					<button>Sort</button>
				</div>
			</div>

			<div className="media-page">
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
			</div>
		</div>
	);
};

export default Books;
