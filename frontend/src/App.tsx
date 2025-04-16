import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// # =========== PAGES & COMPONENTS =========== #
import Home from "./pages/Home";
import MediaPage from "./pages/MediaPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<MediaPage sectionName="Books" />} />
					<Route path="/manga" element={<MediaPage sectionName="Manga" />} />
					<Route path="/movies" element={<MediaPage sectionName="Movies" />} />
					<Route path="/series" element={<MediaPage sectionName="Series" />} />
					<Route path="/anime" element={<MediaPage sectionName="Anime" />} />
					<Route path="/games" element={<MediaPage sectionName="Games" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
