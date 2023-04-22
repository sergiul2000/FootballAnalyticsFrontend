import React from "react";

function PlayerDefensiveContent({ defensive_id, clearances_per_game, dribbled_past_per_game, fouls_per_game,id_player,interceptions_per_game,
  offsides_won_per_game, outfielder_blocks_per_game,own_goals,tackles_per_game,team_name,year_start,year_end}) {
  return (
    <tr>
      <td scope="col">{defensive_id}</td>
      <td scope="col">{clearances_per_game}</td>
      <td scope="col">{dribbled_past_per_game}</td>
      <td scope="col">{fouls_per_game}</td>
      <td scope="col">{id_player}</td>
      <td scope="col">{interceptions_per_game}</td>
      <td scope="col">{offsides_won_per_game}</td>
      <td scope="col">{outfielder_blocks_per_game}</td>
      <td scope="col">{own_goals}</td>
      <td scope="col">{tackles_per_game}</td>
      <td scope="col">{team_name}</td>
      <td scope="col">{year_start}</td>
      <td scope="col">{year_end}</td>
    </tr>
  );
}

export default PlayerDefensiveContent;
