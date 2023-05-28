import React, { useEffect, useState } from "react";
// import PlayerDefensiveHeader from "./PlayerDefensiveHeader";
// import insertInTable from "./insertInTable";
import "../../App.css";
import axios from 'axios';
import PlayerPassingContent from "./PlayerPassingContent";


function PlayerPassingComponent({teamName,yearStart}) {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/football-analytics/playerPassing/'+teamName+'/'+yearStart).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
  },[teamName,yearStart])
  
  let nr_of_element = 0;
  return (
    // <div className="containerContainer">
    <div className=" tableContainer ">
      <table className=" table  table-striped table-hover table-bordered table-dark ">
        <thead>
          <tr className="tableHead">
            <th scope="col">Player name</th>
            <th scope="col">Team</th>
            <th scope="col">Year start</th>
            <th scope="col">Year end</th>
            <th scope="col">Key passes / game</th>
            <th scope="col">Passes / game</th>
            {/* <th scope="col">Player id</th> */}
            <th scope="col">Crosses / game</th>
            <th scope="col">Long ball / game</th>
            <th scope="col">Through balls / game</th>
          </tr>
        </thead>
        <tbody>          
          {data.map((player) => {
            nr_of_element += 1;
            return (
              <PlayerPassingContent
              key={player.id_player}
              player_name={player.player_name}
              team_name={player.team_name}
              year_start={player.year_start}
              year_end={player.year_end}
              key_passes_per_game={player.key_passes_per_game}
              passes_per_game={player.passes_per_game}
              crosses_per_game={player.crosses_per_game}
              long_ball_per_game={player.long_ball_per_game}
              through_balls_per_game={player.through_balls_per_game}
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

export default PlayerPassingComponent;
