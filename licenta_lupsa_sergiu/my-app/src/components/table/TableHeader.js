import React from "react";

function TableHeader({ id_text, player_text, age_text }) {
  return (
    <tr class="tableHead">
      <th scope="col">#</th>
      <th scope="col">{id_text}</th>
      <th scope="col">{player_text}</th>
      <th scope="col">{age_text}</th>
    </tr>
  );
}

export default TableHeader;
