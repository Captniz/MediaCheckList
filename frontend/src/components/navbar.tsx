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
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link books active-link-book" : "media-page-link books"} to="/books"> 
                Books
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link manga active-link-manga" : "media-page-link manga"} to="/manga">
                Manga
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link series active-link-series" : "media-page-link series"} to="/series">
                Series
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link anime active-link-anime" : "media-page-link anime"} to="/anime">
                Anime
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link games active-link-games" : "media-page-link games"} to="/games">
                Games
              </NavLink>
              <NavLink className={({ isActive }) =>  isActive ? "media-page-link movies active-link-movies" : "media-page-link movies"} to="/movies">
                Movies
              </NavLink>
            </div>
            <button className="login-button"><p>+</p></button>
          </div>
        </header>
    );
}

export default Navbar;