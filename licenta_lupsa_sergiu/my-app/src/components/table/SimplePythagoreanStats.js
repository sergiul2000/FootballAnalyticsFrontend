import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import  { useState } from "react";


import React from "react";
import SimplePythagoreanComponent from "./SimplePythagoreanComponent";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SimplePythagoreanStats() {
  const [leagueToShow, setLeagueToShow] = useState('epl');
  const [yearToShow, setYearToShow] = useState(2021);
  

const handleLeagueChange = (event) => {
  setLeagueToShow(event.target.value);
}
const handleYearChange = (event) => {
  setYearToShow(event.target.value);
}

let componentToRender;
 componentToRender = <SimplePythagoreanComponent
leagueName={leagueToShow}
yearStart={yearToShow}/>

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
            <MenuItem divider={true} value={2015}>2015</MenuItem>
            <MenuItem divider={true} value={2016}>2016</MenuItem>
            <MenuItem divider={true} value={2017}>2017</MenuItem>
            <MenuItem divider={true} value={2018}>2018</MenuItem>
            <MenuItem divider={true} value={2019}>2019</MenuItem>
            <MenuItem divider={true} value={2020}>2020</MenuItem>
            <MenuItem divider={true} value={2021}>2021</MenuItem>
          </Select>
        </FormControl>
        </div>
        {componentToRender}
      </div>
    </>
  );
}

export default SimplePythagoreanStats;
