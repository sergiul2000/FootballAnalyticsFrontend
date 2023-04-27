// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import React from "react";
import { Route, Routes } from "react-router";
import PlayerStats from "./components/table/PlayerStats";
// import TableComponent from "./table";

function App() {
  return (
    <Routes>
      <Route path="/playerStats" element={<PlayerStats/>}/>
    </Routes>
  );
}

export default App;
