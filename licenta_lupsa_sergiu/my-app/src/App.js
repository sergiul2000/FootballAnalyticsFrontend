// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import MyNavbar from "./navbar.js";
import React from "react";
// import TableComponent from "./table";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      {/* <div className="paragraph"><TableComponent /></div> */}
    </>
  );
}

export default App;
