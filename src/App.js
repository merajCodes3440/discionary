import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";
import WordDetails from "./components/WordDetails";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
        <Route path="/word/:word" element={<WordDetails />} />{" "}
        {/* Corrected component name */}
      </Routes>
    </div>
  );
}
