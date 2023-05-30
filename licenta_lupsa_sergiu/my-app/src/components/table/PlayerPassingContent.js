import React from "react";

function PlayerPassingContent({ 
  // defensive_id, 
  player_name,
  // id_player,
  team_name,
  year_start,year_end, key_passes_per_game,passes_per_game,crosses_per_game,long_ball_per_game,through_balls_per_game}) {
  return (
    <tr>
      {/* <td scope="col">{defensive_id}</td> */}
      <td scope="col">{player_name}</td>
      <td className="centerText" scope="col">{team_name}</td>
      <td className="centerText" scope="col">{year_start}</td>
      <td className="centerText" scope="col">{year_end}</td>
      {/* <td className="centerText" scope="col">{id_player}</td> */}
      <td className="centerText" scope="col">{key_passes_per_game}</td>
      <td className="centerText" scope="col">{passes_per_game}</td>
      <td className="centerText" scope="col">{crosses_per_game}</td>
      <td className="centerText" scope="col">{long_ball_per_game}</td>
      <td className="centerText" scope="col">{through_balls_per_game}</td>
    </tr>
  );
}

export default PlayerPassingContent;
