import React from "react";

function PlayerOffensiveContent({ 
  // defensive_id, 
  player_name,
  // id_player,
  dribbles_per_game,
  fouled_per_game, offsides_per_game,dispossessed_per_game,bad_control_per_game}) {
  return (
    <tr>
      {/* <td scope="col">{defensive_id}</td> */}
      <td scope="col">{player_name}</td>
      <td scope="col">{dribbles_per_game}</td>
      <td scope="col">{fouled_per_game}</td>
      <td scope="col">{offsides_per_game}</td>
      {/* <td scope="col">{id_player}</td> */}
      <td scope="col">{dispossessed_per_game}</td>
      <td scope="col">{bad_control_per_game}</td>
    </tr>
  );
}

export default PlayerOffensiveContent;
