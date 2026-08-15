import "./App.css";
import Home from "./Components/pages/Home";
import { Route, Routes } from "react-router-dom";
import TvShowsPage from "../src/Components/pages/TvShowsPage";
import Shared from "../src/Components/pages/Shared";
import MoviePage from "../src/Components/pages/MoviePage";
import LatestPage from "../src/Components/pages/LatestPage";
import Four04 from "./Components/Four04";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Shared />}>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShowsPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/latest" element={<LatestPage />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
