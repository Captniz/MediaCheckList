import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// # =========== PAGES & COMPONENTS =========== #
import Home from "./pages/Home";
import Books from "./pages/Books";
import Manga from "./pages/Manga";
import Series from "./pages/Series";
import Anime from "./pages/Anime";
import Films from "./pages/Films";
import Games from "./pages/Games";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<Books />} />
					<Route path="/manga" element={<Manga />} />
					<Route path="/series" element={<Series />} />
					<Route path="/movies" element={<Films />} />
					<Route path="/anime" element={<Anime />} />
					<Route path="/games" element={<Games />} /> 
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
