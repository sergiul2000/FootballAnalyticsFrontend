import React from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
// import insertInTable from "./insertInTable";
import "../../App.css";

const json_example = [
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
  {
    id_player: 123,
    player_name: "messi",
    age: 37,
  },
  {
    id_player: 456,
    player_name: "ronaldo",
    age: 38,
  },
];

function TableComponent() {
  let nr_of_element = 0;
  const text = {
    id_player_text: "id player",
    player_name_text: "player name",
    age_text: "age text",
  };
  return (
    // <div className="containerContainer">
    <div className=" tableContainer ">
      <table className=" table  table-striped table-hover table-bordered table-dark ">
        <thead>
          <TableHeader
            id_text={text.id_player_text}
            player_text={text.player_name_text}
            age_text={text.age_text}
          />
        </thead>
        <tbody>
          {json_example.map((player) => {
            nr_of_element += 1;
            return (
              <TableContent
                key={nr_of_element}
                nr_row={nr_of_element}
                id_player={player.id_player}
                player_name={player.player_name}
                age={player.age}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// window.onload(insertInTable(nr_of_element, "ana", "are", "mere"));

export default TableComponent;
