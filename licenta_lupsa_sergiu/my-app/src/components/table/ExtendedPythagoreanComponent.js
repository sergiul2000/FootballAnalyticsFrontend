import React, { useEffect, useState } from "react";
// import PlayerDefensiveHeader from "./PlayerDefensiveHeader";
// import insertInTable from "./insertInTable";
import "../../App.css";
import axios from 'axios';
import ExtendedPythagoreanContent from "./ExtendedPythagoreanContent";


function ExtendedPythagoreanComponent({leagueName,yearStart}) {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/football-analytics/extendedPythagorean/'+leagueName+'/'+yearStart).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
  },[leagueName,yearStart])
  
//   let nr_of_element = 0;
  return (
    // <div className="containerContainer">
    <div className=" tableContainer ">
      <table className=" table  table-striped table-hover table-bordered table-dark ">
        <thead>
          <tr className="tableHead">
            <th scope="col">Team</th>
            <th scope="col">League name</th>
            <th scope="col">Year start</th>
            {/* <th scope="col">Player id</th> */}
            <th scope="col">Year end</th>
            <th scope="col">Matches</th>
            <th scope="col">Wins</th>
            <th scope="col">Draws</th>
            <th scope="col">Loses</th>
            <th scope="col">Goals</th>
            <th scope="col">GoalsAgainst</th>
            <th scope="col">Points</th>
            <th scope="col">Estimated Wins</th>
            <th scope="col">Estimated Draws</th>
            <th scope="col">Estimated Loses</th>
            <th scope="col">Estimated Points Extended Pythagorean</th>
            <th scope="col">Delta Points Simple Pythagorean</th>            
          </tr>
        </thead>
        <tbody>          
          {data.map((extendedPythagorean) => {
            // nr_of_element += 1;
            return (
              <ExtendedPythagoreanContent
              key={extendedPythagorean.extended_pythagorean_id}
              team_name={extendedPythagorean.team_name}
              league_name={extendedPythagorean.league_name}
              year_start={extendedPythagorean.year_start}
              year_end={extendedPythagorean.year_end}
              matches={extendedPythagorean.matches}
              wins={extendedPythagorean.wins}
              draws={extendedPythagorean.draws}
              loses={extendedPythagorean.loses}
              goals_scored={extendedPythagorean.goals_scored}
              goals_received={extendedPythagorean.goals_received}
              pts={extendedPythagorean.pts}
              estimated_Wins={extendedPythagorean.estimated_Wins}
              estimated_Draws={extendedPythagorean.estimated_Draws}
              estimated_Loses={extendedPythagorean.estimated_Loses}
              estimated_Points_Extended={extendedPythagorean.estimated_Points_Extended}
              delta_Points_Extended={extendedPythagorean.delta_Points_Extended}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// window.onload(insertInTable(nr_of_element, "ana", "are", "mere"));

export default ExtendedPythagoreanComponent;
