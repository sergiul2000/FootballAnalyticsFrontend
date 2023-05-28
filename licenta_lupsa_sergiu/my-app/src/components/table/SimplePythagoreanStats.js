// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import LeagueTableComponent from "./LeagueTableComponent";
import "../../App.css";
import  { useState } from "react";
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';


import MyNavbar from "../../navbar.js";
import React from "react";
import SimplePythagoreanComponent from "./SimplePythagoreanComponent";
// import TableComponent from "./table";

function SimplePythagoreanStats() {
  const [leagueToShow, setLeagueToShow] = useState('epl');
  const [yearToShow, setYearToShow] = useState(2021);
  

const handleLeagueChange = (event) => {
  setLeagueToShow(event.target.value);
  // console.log(event.target.value)
}
const handleYearChange = (event) => {
  setYearToShow(event.target.value);
  // console.log(event.target.value)
}

let componentToRender = <SimplePythagoreanComponent
leagueName={leagueToShow}
yearStart={yearToShow}/>

let componentTosRender;
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      {/* <PlayerDefensiveComponent /> */}
      <div className="background">
      <select value={leagueToShow} onChange={handleLeagueChange}>
          <option value="epl">Premiere league</option>
          <option value="la liga">La liga</option>
          <option value="ligue 1">Ligue 1</option>
          <option value="serie a">Serie A</option>
          <option value="bundesliga">Bundesliga</option>
        </select>
      <select value={yearToShow} onChange={handleYearChange}>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
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

export default SimplePythagoreanStats;
