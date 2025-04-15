import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
	return (
		<header>
			<div className="navbar-container">
				<NavLink
					className={({ isActive }) =>
						isActive ? "active-media-page-link" : ""
					}
					to="/"
				>
					<h1 className="navbar-title">Home</h1>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active-media-page-link" : ""
					}
					to="/books"
				>
					Books
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active-media-page-link" : ""
					}
					to="/manga"
				>
					Manga
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active-media-page-link" : ""
					}
					to="/series"
				>
					Series
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active-media-page-link" : ""
					}
					to="/anime"
				>
					Anime
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active-media-page-link" : ""
					}
					to="/games"
				>
					Games
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active-media-page-link" : ""
					}
					to="/movies"
				>
					Movies
				</NavLink>
				<button className="quick-add-button">
					<p>+</p>
				</button>
			</div>
		</header>
	);
};

export default Navbar;
