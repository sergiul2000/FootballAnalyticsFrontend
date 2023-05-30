import React from "react";

function PlayerDefensiveContent({ 
  // defensive_id, 
  player_name,team_name,year_start,year_end,
  clearances_per_game, dribbled_past_per_game, fouls_per_game,
  // id_player,
  interceptions_per_game,
  offsides_won_per_game, outfielder_blocks_per_game,own_goals,tackles_per_game}) {
  return (
    <tr>
      {/* <td scope="col">{defensive_id}</td> */}
      <td scope="col">{player_name}</td>
      <td className="centerText" scope="col">{team_name}</td>
      <td className="centerText" scope="col">{year_start}</td>
      <td className="centerText" scope="col">{year_end}</td>
      <td className="centerText" scope="col">{clearances_per_game}</td>
      <td className="centerText" scope="col">{dribbled_past_per_game}</td>
      <td className="centerText" scope="col">{fouls_per_game}</td>
      {/* <td className="centerText" scope="col">{id_player}</td> */}
      <td className="centerText" scope="col">{interceptions_per_game}</td>
      <td className="centerText" scope="col">{offsides_won_per_game}</td>
      <td className="centerText" scope="col">{outfielder_blocks_per_game}</td>
      <td className="centerText" scope="col">{own_goals}</td>
      <td className="centerText" scope="col">{tackles_per_game}</td>
    </tr>
  );
}

export default PlayerDefensiveContent;
