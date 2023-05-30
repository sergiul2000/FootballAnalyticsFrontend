// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import PlayerDefensiveComponent from "./PlayerDefensiveComponent";
import PlayerOffensiveComponent from "./PlayerOffensiveComponent";
import PlayerPassingComponent from "./PlayerPassingComponent";
import "../../App.css";
import  { useState ,useEffect} from "react";
import axios from "axios";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';


// import MyNavbar from "../../navbar.js";
import React from "react";
import PlayerSummaryComponent from "./PlayerSummaryComponent";
// import TableComponent from "./table";
function PlayerStats() {

  const [data,setData] = useState([])
  
  
  const [componentToShow, setComponentToShow] = useState('summary');
  const [leagueToShow, setLeagueToShow] = useState(sessionStorage.getItem('playersLeague'));
  const [teamToShow, setTeamToShow] = useState('');
  const [yearToShow, setYearToShow] = useState(2021);
  
  useEffect(() => {
    axios.get('http://localhost:8080/football-analytics/rosters/'+leagueToShow+'/'+yearToShow).then((response)=>{
      setData(response.data)
      // console.log(response.data)
      // if(teamToShow==null)
        setTeamToShow(response.data[0]);
      
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
}

const handleYearChange = (event) => {
  setYearToShow(event.target.value);
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
      <div className="background">
        <div className="filtersList">
        <FormControl >
          <Select sx={{ backgroundColor:'var(--charcoal)',color:'white' }}
            id="demo-simple-select"
            value={leagueToShow}
            onChange={handleLeagueChange}
          >
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"epl"}>Premiere league</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"la liga"}>La liga</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"ligue 1"}>Ligue 1</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"serie a"}>Serie A</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"bundesliga"}>Bundesliga</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <Select sx={{ backgroundColor:'var(--charcoal)',color:'white' }}
            id="demo-simple-select"
            value={yearToShow}
            onChange={handleYearChange}
          >
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={2014}>2014</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={2015}>2015</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={2016}>2016</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={2017}>2017</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={2018}>2018</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={2019}>2019</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={2020}>2020</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={2021}>2021</MenuItem>
          </Select>
        </FormControl>

        <FormControl >
          <Select sx={{ backgroundColor:'var(--charcoal)',color:'white' }}
            id="demo-simple-select"
            value={teamToShow}
            onChange={handleTeamChange}
          >{     data.map(iterator=>{
            return (
            <MenuItem divider={true} sx={{justifyContent:"center"}} key={iterator} value={iterator}>{iterator}</MenuItem>
            // <option key={iterator} value={iterator}>{iterator}</option>
            );}
          )}
          </Select>
        </FormControl>
        
          {/* <select value={teamToShow} onChange={handleTeamChange}>
          {     data.map(iterator=>{
                return (
                <option key={iterator} value={iterator}>{iterator}</option>
                );}
              )}
          </select> */}
        <FormControl >
          <Select sx={{ backgroundColor:'var(--charcoal)',color:'white' }}
            id="demo-simple-select"
            value={componentToShow}
            onChange={handleComponentChange}
          >
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"defensive"}>Defensive Stats</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"passing"}>Passing Stats</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"offensive"}>Offensive Stats</MenuItem>
            <MenuItem divider={true} sx={{justifyContent:"center"}} value={"summary"}>Summary</MenuItem>
          </Select>
        </FormControl>
        </div>
        {componentToRender}
      </div>
    </>
  );
}

export default PlayerStats;
