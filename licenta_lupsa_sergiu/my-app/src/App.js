// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import React from "react";
import { Route, Routes } from "react-router";
import PlayerDefensive from "./components/table/PlayerDefensive";
// import TableComponent from "./table";

function App() {
  return (
    <Routes>
      <Route path="/playerDefensive" element={<PlayerDefensive/>}/>
    </Routes>

  );
}

export default App;
