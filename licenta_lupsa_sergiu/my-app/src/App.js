// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import React from "react";
import { Route, Routes } from "react-router";
import PlayerStats from "./components/table/PlayerStats";
import LeagueTableStats from "./components/table/LeagueTableStats";
import SimplePythagoreanStats from "./components/table/SimplePythagoreanStats";
// import TableComponent from "./table";

function App() {
  sessionStorage.setItem('playersLeague','epl');
  return (
    <Routes>
      <Route path="/playerStats" element={<PlayerStats/>}/>
      <Route path="/leagueStats" element={<LeagueTableStats/>}/>
      <Route path="/simplePythagorean" element={<SimplePythagoreanStats/>}/>
    </Routes>
  );
}

export default App;
