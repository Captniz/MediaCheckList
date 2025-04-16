import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ title, path }: { title: string; path: string }) => {
	return (
		<header>
			<div className="navbar-container">
				<NavLink className="active-media-page-link navbar-title" to={path}>
					{title}
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active-media-page-link" : ""
					}
					to="/"
				>
					Home
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
