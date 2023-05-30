import React, { useEffect, useState } from "react";
// import PlayerDefensiveHeader from "./PlayerDefensiveHeader";
// import insertInTable from "./insertInTable";
import "../../App.css";
import axios from 'axios';
import SimplePythagoreanContent from "./SimplePythagoreanContent";


function SimplePythagoreanComponent({leagueName,yearStart}) {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/football-analytics/simplePythagorean/'+leagueName+'/'+yearStart).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
  },[leagueName,yearStart])
  
  // let nr_of_element = 0;
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
            <th scope="col">Estimated Points Simple Pythagorean</th>
            <th scope="col">Delta Points Simple Pythagorean</th>            
          </tr>
        </thead>
        <tbody>          
          {data.map((simplePythagorean) => {
            // nr_of_element += 1;
            return (
              <SimplePythagoreanContent
              key={simplePythagorean.simple_pythagorean_id}
              team_name={simplePythagorean.team_name}
              league_name={simplePythagorean.league_name}
              year_start={simplePythagorean.year_start}
              year_end={simplePythagorean.year_end}
              matches={simplePythagorean.matches}
              wins={simplePythagorean.wins}
              draws={simplePythagorean.draws}
              loses={simplePythagorean.loses}
              goals_scored={simplePythagorean.goals_scored}
              goals_received={simplePythagorean.goals_received}
              pts={simplePythagorean.pts}
              estimated_points_simple_pythagorean={simplePythagorean.estimated_points_simple_pythagorean}
              delta_points_simple_pythagorean={simplePythagorean.delta_points_simple_pythagorean}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// window.onload(insertInTable(nr_of_element, "ana", "are", "mere"));

export default SimplePythagoreanComponent;
