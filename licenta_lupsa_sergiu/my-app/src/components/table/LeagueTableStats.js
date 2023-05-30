import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import LeagueTableComponent from "./LeagueTableComponent";
import "../../App.css";
import  { useState } from "react";

function LeagueTableStats() {
  const [leagueToShow, setLeagueToShow] = useState('epl');
  const [yearToShow, setYearToShow] = useState(2021);
  

const handleLeagueChange = (event) => {
  setLeagueToShow(event.target.value);
}
const handleYearChange = (event) => {
  setYearToShow(event.target.value);
}

let componentToRender = <LeagueTableComponent
leagueName={leagueToShow}
yearStart={yearToShow}/>

  return (
    <>
      {/* <header>
        <MyNavbar />
      </header> */}
      <div className="background">
        <div className="filtersList">
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
        </div>  
        {componentToRender}
      </div>
    </>
  );
}

export default LeagueTableStats;
