import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/Favorites/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="catalog"
            element={<Catalog />}
          />
          <Route
            path="favorites"
            element={<Favorites />}
          />
        </Route>
        <Route
          path="*"
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default App;
