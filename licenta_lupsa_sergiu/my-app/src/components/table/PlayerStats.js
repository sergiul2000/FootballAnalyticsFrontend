// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import PlayerDefensiveComponent from "./PlayerDefensiveComponent";
import PlayerOffensiveComponent from "./PlayerOffensiveComponent";
import PlayerPassingComponent from "./PlayerPassingComponent";
import "../../App.css";
import  { useState ,useEffect} from "react";
import axios from "axios";

// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';


import MyNavbar from "../../navbar.js";
import React from "react";
import PlayerSummaryComponent from "./PlayerSummaryComponent";
// import TableComponent from "./table";
function PlayerStats() {

  const [data,setData] = useState([])
  
  
  const [componentToShow, setComponentToShow] = useState('summary');
  const [leagueToShow, setLeagueToShow] = useState(sessionStorage.getItem('playersLeague'));
  const [teamToShow, setTeamToShow] = useState("Arsenal");
  const [yearToShow, setYearToShow] = useState(2021);
  
  useEffect(() => {
    axios.get('http://localhost:8080/football-analytics/rosters/'+leagueToShow+'/'+yearToShow).then((response)=>{
      setData(response.data)
      console.log(response.data)
      // setTeamToShow(data[0]);
    })
  },[leagueToShow,yearToShow])
  
const handleComponentChange = (event) => {
  setComponentToShow(event.target.value);
}


const handleTeamChange = (event) => {
  setTeamToShow(event.target.value);
}


const handleLeagueChange =  (event) => {
  setLeagueToShow(event.target.value);
  sessionStorage.setItem('playersLeague', event.target.value);
  // fetchTeamDataAndSet(data);
  
  // await fetchTeamDataAndSet(data);
  // league=event.target.value 
}

const handleYearChange = (event) => {
  setYearToShow(event.target.value);
  // console.log(event.target.value)
}

let componentToRender;

switch(componentToShow) {
  case 'defensive':
    componentToRender = <PlayerDefensiveComponent
     teamName={teamToShow}
     yearStart={yearToShow}
     />;
    break;
  case 'passing':
    componentToRender = <PlayerPassingComponent
    teamName={teamToShow}
    yearStart={yearToShow} />;
    break;
  case 'offensive':
    componentToRender = <PlayerOffensiveComponent
    teamName={teamToShow}
    yearStart={yearToShow} />;
    break;
  case 'summary':
    componentToRender = <PlayerSummaryComponent
    teamName={teamToShow}
    yearStart={yearToShow} />;
    break;
  default:
    componentToRender = <PlayerSummaryComponent
    teamName={teamToShow}
    yearStart={yearToShow} />;
}
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
      <select value={teamToShow} onChange={handleTeamChange}>
      {
                data.map(iterator=>{

            return (
            <option key={iterator} value={iterator}>{iterator}</option>
            
            );
          }
            
          )}
          {/* <option value={data[1]}>{data[1]}</option>
          <option value={data[2]}>{data[2]}</option>
          <option value={data[3]}>{data[3]}</option>
          <option value={data[4]}>{data[4]}</option>
          <option value={data[5]}>{data[5]}</option> */}
        </select>
      <select value={yearToShow} onChange={handleYearChange}>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      <select value={componentToShow} onChange={handleComponentChange}>
          <option value="defensive">Defensive Stats</option>
          <option value="passing">Passing Stats</option>
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
