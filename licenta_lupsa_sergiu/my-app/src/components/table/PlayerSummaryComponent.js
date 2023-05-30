import React, { useEffect, useState } from "react";
// import PlayerDefensiveHeader from "./PlayerDefensiveHeader";
// import insertInTable from "./insertInTable";
import "../../App.css";
import axios from 'axios';
import PlayerSummaryContent from "./PlayerSummaryContent";


function PlayerSummaryComponent({teamName,yearStart}) {
  const [data,setData] = useState([])

  useEffect(() => {
    if(teamName){
      axios.get('http://localhost:8080/football-analytics/playerSummary/'+teamName+'/'+yearStart).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
    }
  },[teamName,yearStart])
  
  // let nr_of_element = 0;
  return (
    // <div className="containerContainer">
    <div className=" tableContainer ">
      <table className=" table  table-striped table-hover table-bordered table-dark ">
        <thead>
          <tr className="tableHead">
            <th scope="col">Player name</th>
            <th scope="col">Team</th>
            <th scope="col">Year start</th>
            {/* <th scope="col">Player id</th> */}
            <th scope="col">Year end</th>
            <th scope="col">Games</th>
            <th scope="col">Start games</th>
            <th scope="col">Sub games</th>
            <th scope="col">Mins</th>
            <th scope="col">Goals</th>
            <th scope="col">Assists</th>
            <th scope="col">Yellow cards</th>
            <th scope="col">Red cards</th>
            <th scope="col">Shots / game</th>
            <th scope="col">Pass success percentage</th>
            <th scope="col">Aerials won</th>
            <th scope="col">Man of the match</th>
            <th style={{backgroundColor: 'var(--beaver1)'}}scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>          
          {data.map((player) => {
            // nr_of_element += 1;
            return (
              <PlayerSummaryContent
              key={player.id_player}
              player_name={player.player_name}
              team_name={player.team_name}
              year_start={player.year_start}
              year_end={player.year_end}
              games={player.games}
              start_games={player.start_games}
              sub_games={player.sub_games}
              mins={player.mins}
              goals={player.goals}
              assists={player.assists}
              yellow_cards={player.yellow_cards}
              red_cards={player.red_cards}
              shots_per_game={player.shots_per_game}
              pass_success_percentage={player.pass_success_percentage}
              // id_player={player.id_player}
              bad_control_per_game={player.bad_control_per_game}
              aerials_won={player.aerials_won}
              man_of_the_match={player.man_of_the_match}
              rating={player.rating}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// window.onload(insertInTable(nr_of_element, "ana", "are", "mere"));

export default PlayerSummaryComponent;
