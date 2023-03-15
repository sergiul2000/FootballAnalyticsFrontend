import React from "react";

function TableContent({ nr_row, id_player, player_name, age }) {
  return (
    <tr>
      <td scope="col">{nr_row}</td>
      <td scope="col">{id_player}</td>
      <td scope="col">{player_name}</td>
      <td scope="col">{age}</td>
    </tr>
  );
}

export default TableContent;
