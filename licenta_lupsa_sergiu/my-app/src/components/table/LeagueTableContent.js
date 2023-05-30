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
      <td className="centerText" scope="col">{league_name}</td>
      <td className="centerText" scope="col">{year_start}</td>
      <td className="centerText" scope="col">{year_end}</td>
      {/* <td scope="col">{id_player}</td> */}
      <td className="centerText" scope="col">{matches}</td>
      <td className="centerText" scope="col">{wins}</td>
      <td className="centerText" scope="col">{draws}</td>
      <td className="centerText" scope="col">{loses}</td>
      <td className="centerText" scope="col">{goals}</td>
      <td className="centerText" scope="col">{goalsAgainst}</td>
      <td className="centerText" scope="col">{pts}</td>
      <td className="centerText" scope="col">{npxGoals}</td>
      <td className="centerText" scope="col">{npxGoalsAgainst}</td>
      <td className="centerText" scope="col">{npxGoalsDifference}</td>
      <td className="centerText" scope="col">{ppda}</td>
      <td className="centerText" scope="col">{oppda}</td>
      <td className="centerText" scope="col">{dc}</td>
      <td className="centerText" scope="col">{odc}</td>
      <td className="centerText" scope="col">{xgoals}</td>
      <td className="centerText" scope="col">{xgoalsAgainst}</td>
    </tr>
  );
}

export default LeagueTableContent;
