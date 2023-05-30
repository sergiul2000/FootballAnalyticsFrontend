import React from "react";

function ExtendedPythagoreanContent({ 
  // defensive_id, 
  league_name,
  // id_player,
  team_name,
  year_start, year_end,matches,wins,draws,loses,goals_scored,goals_received,pts,estimated_Wins,estimated_Draws,estimated_Loses,
  estimated_Points_Extended,delta_Points_Extended}) {
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
      <td className="centerText" scope="col">{estimated_Wins}</td>
      <td className="centerText" scope="col">{estimated_Draws}</td>
      <td className="centerText" scope="col">{estimated_Loses}</td>
      <td className="centerText" scope="col">{estimated_Points_Extended}</td>
      <td className="centerText" scope="col">{delta_Points_Extended}</td>
    </tr>
  );
}

export default ExtendedPythagoreanContent;
