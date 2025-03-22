import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <header>
          <div className="navbar-container">
            <NavLink 
            className={({ isActive }) => isActive ? "active-link" : "nav-link"} 
            to="/">
              <h1 className="navbar-title">Home</h1>
            </NavLink>
            <div className="media-pages-container">
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link active-link-book" : "media-page-link books"} to="/books"> 
                Books
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link active-link-manga" : "media-page-link manga"} to="/manga">
                Manga
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link active-link-series" : "media-page-link series"} to="/series">
                Series
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link active-link-anime" : "anime media-page-link"} to="/anime">
                Anime
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link active-link-games" : "media-page-link games"} to="/games">
                Games
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link active-link-movies" : "media-page-link movies"} to="/movies">
                Movies
              </NavLink>
            </div>
            <button className="quick-add-button"><p>+</p></button>
          </div>
        </header>
    );
}

export default Navbar;