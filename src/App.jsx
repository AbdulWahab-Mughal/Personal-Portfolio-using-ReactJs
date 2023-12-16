import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";

import Router from "./Components/Router/Router";
//tsparticles imports
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Part from "./Components/tsParticles/Part.js";

function App() {
  const location = useLocation();

  const renderParticlesInHome = location.pathname === "/";
  // init funtion of tsParticles
  const handleInit = useCallback(async (main) => {
    await loadFull(main);
  });

  return (
    <div className="App">
      {/* tsParticles component */}
      {renderParticlesInHome && (
        <Particles id="particles" options={Part} init={handleInit} />
      )}

      <Header />
      <div className="mainContent">
        <Router />
      </div>
    </div>
  );
}

export default App;
