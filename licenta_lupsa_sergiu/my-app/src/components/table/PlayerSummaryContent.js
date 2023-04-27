import React from "react";

function PlayerSummaryContent({ 
  // defensive_id, 
  player_name,
  // id_player,
  team_name,
  year_start, year_end,games,start_games,sub_games,mins,goals,assists,yellow_cards,red_cards,shots_per_game,pass_success_percentage
,aerials_won,man_of_the_match,rating}) {
  return (
    <tr>
      {/* <td scope="col">{defensive_id}</td> */}
      <td scope="col">{player_name}</td>
      <td scope="col">{team_name}</td>
      <td scope="col">{year_start}</td>
      <td scope="col">{year_end}</td>
      {/* <td scope="col">{id_player}</td> */}
      <td scope="col">{games}</td>
      <td scope="col">{start_games}</td>
      <td scope="col">{sub_games}</td>
      <td scope="col">{mins}</td>
      <td scope="col">{goals}</td>
      <td scope="col">{assists}</td>
      <td scope="col">{yellow_cards}</td>
      <td scope="col">{red_cards}</td>
      <td scope="col">{shots_per_game}</td>
      <td scope="col">{pass_success_percentage}</td>
      <td scope="col">{aerials_won}</td>
      <td scope="col">{man_of_the_match}</td>
      <td scope="col">{rating}</td>
    </tr>
  );
}

export default PlayerSummaryContent;
