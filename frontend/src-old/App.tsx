import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// # =========== PAGES & COMPONENTS =========== #
import Home from './pages/home';
import Books from './pages/books';
import Manga from './pages/manga';
import Movies from './pages/movies';
import Series from './pages/series';
import Anime from './pages/anime';
import Games from './pages/games';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/manga' element={<Manga/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='/anime' element={<Anime/>} />
          <Route path='/games' element={<Games/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
