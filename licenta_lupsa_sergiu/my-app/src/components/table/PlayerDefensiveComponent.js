import React, { useEffect, useState } from "react";
// import PlayerDefensiveHeader from "./PlayerDefensiveHeader";
import PlayerDefensiveContent from "./PlayerDefensiveContent";
// import insertInTable from "./insertInTable";
import "../../App.css";
import axios from 'axios';


function PlayerDefensiveComponent({teamName,yearStart}) {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/football-analytics/playerDefensive/'+teamName+'/'+yearStart).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
  },[teamName,yearStart])
  
  return (
    // <div className="containerContainer">
    <div className=" tableContainer ">
      <table className=" table  table-striped table-hover table-bordered table-dark ">
        <thead>
          <tr className="tableHead">
            <th scope="col">Plyer name</th>
            <th scope="col">Team</th>
            <th scope="col">Year start</th>
            <th scope="col">Year end</th>
            <th scope="col">Clearances / game</th>
            <th scope="col">Dribbled past / game</th>
            <th scope="col">Fouls / game</th>
            {/* <th scope="col">Player id</th> */}
            <th scope="col">Interceptions / game</th>
            <th scope="col">Offsides won / game</th>
            <th scope="col">Outfielder_blocks / game</th>
            <th scope="col">Own_goals</th>
            <th scope="col">Tackles / game</th>
          </tr>
        </thead>
        <tbody>          
          {data.map((player) => {
            // nr_of_element += 1;
            return (
              <PlayerDefensiveContent
              key={player.id_player}
              player_name={player.player_name}
              team_name={player.team_name}
              year_start={player.year_start}
              year_end={player.year_end}
              clearances_per_game={player.clearances_per_game}
              dribbled_past_per_game={player.dribbled_past_per_game}
              fouls_per_game={player.fouls_per_game}
              // id_player={player.id_player}
              interceptions_per_game={player.interceptions_per_game}
              offsides_won_per_game={player.offsides_won_per_game}
              outfielder_blocks_per_game={player.outfielder_blocks_per_game}
              own_goals={player.own_goals}
              tackles_per_game={player.tackles_per_game}
                // age={player.age}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// window.onload(insertInTable(nr_of_element, "ana", "are", "mere"));

export default PlayerDefensiveComponent;
