import React from "react";
import "./App.css";
import { GlobalProvider } from "../../context/GlobalState";
import AppBar from "../AppBar/AppBar";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SectorPage from "../SectorPage/SectorPage";
import Landpage from "../Landpage/Landpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <GlobalProvider>
      <div className="App" sx={{ textAlign: "center" }}>
        <Router>
          <AppBar />
          <Routes>
            <Route exact path="/" element={<Landpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/:nomSector/:sectorId" element={<SectorPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </GlobalProvider>
  );
};

export default App;
