import React, { useEffect, useState } from "react";
// import PlayerDefensiveHeader from "./PlayerDefensiveHeader";
import PlayerDefensiveContent from "./PlayerDefensiveContent";
// import insertInTable from "./insertInTable";
import "../../App.css";
import axios from 'axios';
import PlayerOffensiveContent from "./PlayerOffensiveContent";


function PlayerOffensiveComponent() {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/football-analytics/playerOffensive/Real Madrid/2010').then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
  },[])
  
  let nr_of_element = 0;
  return (
    // <div className="containerContainer">
    <div className=" tableContainer ">
      <table className=" table  table-striped table-hover table-bordered table-dark ">
        <thead>
          <tr className="tableHead">
            <th scope="col">Player name</th>
            <th scope="col">Dribbles / game</th>
            <th scope="col">Fouled / game</th>
            {/* <th scope="col">Player id</th> */}
            <th scope="col">Offsides / game</th>
            <th scope="col">Dispossessed / game</th>
            <th scope="col">Bad control / game</th>
          </tr>
        </thead>
        <tbody>          
          {data.map((player) => {
            nr_of_element += 1;
            return (
              <PlayerOffensiveContent
              key={player.id_player}
              player_name={player.player_name}
              dribbles_per_game={player.dribbles_per_game}
              fouled_per_game={player.fouled_per_game}
              offsides_per_game={player.offsides_per_game}
              dispossessed_per_game={player.dispossessed_per_game}
              // id_player={player.id_player}
              bad_control_per_game={player.bad_control_per_game}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// window.onload(insertInTable(nr_of_element, "ana", "are", "mere"));

export default PlayerOffensiveComponent;
