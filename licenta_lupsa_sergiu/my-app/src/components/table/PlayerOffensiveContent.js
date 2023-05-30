import React from "react";

function PlayerOffensiveContent({ 
  // defensive_id, 
  player_name,
  // id_player,
  dribbles_per_game,team_name, year_start,year_end,
  fouled_per_game, offsides_per_game,dispossessed_per_game,bad_control_per_game}) {
  return (
    <tr>
      {/* <td scope="col">{defensive_id}</td> */}
      <td scope="col">{player_name}</td>
      <td className="centerText" scope="col">{team_name}</td>
      <td className="centerText" scope="col">{year_start}</td>
      <td className="centerText" scope="col">{year_end}</td>
      <td className="centerText" scope="col">{dribbles_per_game}</td>
      <td className="centerText" scope="col">{fouled_per_game}</td>
      <td className="centerText" scope="col">{offsides_per_game}</td>
      {/* <td className="centerText" scope="col">{id_player}</td> */}
      <td className="centerText" scope="col">{dispossessed_per_game}</td>
      <td className="centerText" scope="col">{bad_control_per_game}</td>
    </tr>
  );
}

export default PlayerOffensiveContent;
