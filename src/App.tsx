import "./App.css";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UKPage from "./Components/UKPage";
import WorldPage from "./Components/WorldPage";
import HealthPage from "./Components/HealthPage";
import TechPage from "./Components/TechPage";
import EntertainmentPage from "./Components/EntertainmentPage";
import Banner from "./Components/Banner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <div className="navbar-text-container">
          <h1 className="navbar-title">Headline</h1>
        </div>

        <div className="navbar-fullstop-container">
          <h1 className="navbar-fullstop">&#9679;</h1>
        </div>
      </nav>

      <div className="nav-bar-2">
        <nav>
          <h1 className="nav-bar-2-title">NEWS</h1>
        </nav>
      </div>
      <BrowserRouter>
        <div className="nav-link-bar">
          <Link className="nav-links" to={"/"}>
            Home
          </Link>
          <Link className="nav-links" to={"/UKPage"}>
            UK
          </Link>
          <Link className="nav-links" to={"/WorldPage"}>
            World
          </Link>
          <Link className="nav-links" to={"/HealthPage"}>
            Health
          </Link>
          <Link className="nav-links" to={"/TechPage"}>
            Tech
          </Link>
          <Link className="nav-links" to={"/EntertainmentPage"}>
            Entertainment
          </Link>
        </div>
        <Banner />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/UKPage" element={<UKPage />} />
          <Route path="/WorldPage" element={<WorldPage />} />
          <Route path="/HealthPage" element={<HealthPage />} />
          <Route path="/TechPage" element={<TechPage />} />
          <Route path="/EntertainmentPage" element={<EntertainmentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
