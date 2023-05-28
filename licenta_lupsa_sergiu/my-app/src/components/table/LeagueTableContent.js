import React from "react";

function LeagueTableContent({ 
  // defensive_id, 
  league_name,
  // id_player,
  team_name,
  year_start, year_end,matches,wins,draws,loses,goals,goalsAgainst,pts,npxGoals,npxGoalsAgainst,npxGoalsDifference,ppda,oppda,
dc,odc,xgoals,xgoalsAgainst}) {
  return (
    <tr>
      {/* <td scope="col">{defensive_id}</td> */}
      <td scope="col">{team_name}</td>
      <td scope="col">{league_name}</td>
      <td scope="col">{year_start}</td>
      <td scope="col">{year_end}</td>
      {/* <td scope="col">{id_player}</td> */}
      <td scope="col">{matches}</td>
      <td scope="col">{wins}</td>
      <td scope="col">{draws}</td>
      <td scope="col">{loses}</td>
      <td scope="col">{goals}</td>
      <td scope="col">{goalsAgainst}</td>
      <td scope="col">{pts}</td>
      <td scope="col">{npxGoals}</td>
      <td scope="col">{npxGoalsAgainst}</td>
      <td scope="col">{npxGoalsDifference}</td>
      <td scope="col">{ppda}</td>
      <td scope="col">{oppda}</td>
      <td scope="col">{dc}</td>
      <td scope="col">{odc}</td>
      <td scope="col">{xgoals}</td>
      <td scope="col">{xgoalsAgainst}</td>
    </tr>
  );
}

export default LeagueTableContent;
