import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";

function App() {
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
