import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// # =========== PAGES & COMPONENTS =========== #
import Home from "./pages/Home";
import Books from "./pages/Books";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<Books />} />
					<Route path="/manga" element={<Manga />} />
					<Route path="/movies" element={<Series />} />
					<Route path="/series" element={<Anime />} />
					<Route path="/anime" element={<Films />} />
					<Route path="/games" element={<Games />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
