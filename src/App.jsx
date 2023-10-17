import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import Details from "./views/Details";
import NotFound from "./views/NotFound";
import NavMenu from "./components/NavMenu";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <NavMenu />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemons"
          element={<Pokemons />}
        />
        <Route
          path="/pokemons/:name"
          element={<Details />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
export default App;
