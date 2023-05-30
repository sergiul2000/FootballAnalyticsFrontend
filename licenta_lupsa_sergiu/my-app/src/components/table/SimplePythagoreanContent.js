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
      <td className="centerText" scope="col">{league_name}</td>
      <td className="centerText" scope="col">{year_start}</td>
      <td className="centerText" scope="col">{year_end}</td>
      {/* <td className="centerText" scope="col">{id_player}</td> */}
      <td className="centerText" scope="col">{matches}</td>
      <td className="centerText" scope="col">{wins}</td>
      <td className="centerText" scope="col">{draws}</td>
      <td className="centerText" scope="col">{loses}</td>
      <td className="centerText" scope="col">{goals_scored}</td>
      <td className="centerText" scope="col">{goals_received}</td>
      <td className="centerText" scope="col">{pts}</td>
      <td className="centerText" scope="col">{estimated_points_simple_pythagorean}</td>
      <td className="centerText" scope="col">{delta_points_simple_pythagorean}</td>
    </tr>
  );
}

export default SimplePythagoreanContent;
