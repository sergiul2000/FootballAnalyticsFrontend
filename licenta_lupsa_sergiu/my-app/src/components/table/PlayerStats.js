// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import PlayerDefensiveComponent from "./PlayerDefensiveComponent";
import PlayerOffensiveComponent from "./PlayerOffensiveComponent";
import "../../App.css";
import  { useEffect, useState } from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import MyNavbar from "../../navbar.js";
import React from "react";
import PlayerSummaryComponent from "./PlayerSummaryComponent";
// import TableComponent from "./table";

function PlayerStats() {
  const [componentToShow, setComponentToShow] = useState('summary');
  
const handleComponentChange = (event) => {
  setComponentToShow(event.target.value);
}

let componentToRender;

switch(componentToShow) {
  case 'defensive':
    componentToRender = <PlayerDefensiveComponent />;
    break;
  case 'offensive':
    componentToRender = <PlayerOffensiveComponent />;
    break;
  case 'summary':
    componentToRender = <PlayerSummaryComponent />;
    break;
  default:
    componentToRender = <PlayerSummaryComponent />;
}
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      {/* <PlayerDefensiveComponent /> */}
      <div className="background">
      <select value={componentToShow} onChange={handleComponentChange}>
          <option value="defensive">Defensive Stats</option>
          <option value="offensive">Offensive Stats</option>
          <option value="summary">Summary</option>
        </select>
        {/* <Select labelId="label" id="select" value="20">
          <MenuItem value="defensive">Defensive Stats</MenuItem>
          <MenuItem value="20">Twenty</MenuItem>
        </Select> */}
        {componentToRender}
        
      </div>
      {/* <div className="paragraph"><TableComponent /></div> */}
    </>
  );
}

export default PlayerStats;
