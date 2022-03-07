import { useState, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import MovieListContextProvider from "./context/MovieListContext";
import SearchMoviesContextProvider from "./context/SearchMoviesContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";
import { MovieListContext } from "./context/MovieListContext";

function App() {
  const [count, setCount] = useState(0);
  const { searchText } = useContext(MovieListContext);

  return (
    <div className="bg-neutral-900">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/search/:name" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
