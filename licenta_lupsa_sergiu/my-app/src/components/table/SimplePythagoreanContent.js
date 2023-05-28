import React from "react";

function SimplePythagoreanContent({ 
  // defensive_id, 
  league_name,
  // id_player,
  team_name,
  year_start, year_end,matches,wins,draws,loses,goals_scored,goals_received,pts,estimated_points_simple_pythagorean,delta_points_simple_pythagorean}) {
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
      <td scope="col">{goals_scored}</td>
      <td scope="col">{goals_received}</td>
      <td scope="col">{pts}</td>
      <td scope="col">{estimated_points_simple_pythagorean}</td>
      <td scope="col">{delta_points_simple_pythagorean}</td>
    </tr>
  );
}

export default SimplePythagoreanContent;
