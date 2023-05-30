import React, { useEffect, useState } from "react";
// import PlayerDefensiveHeader from "./PlayerDefensiveHeader";
// import insertInTable from "./insertInTable";
import "../../App.css";
import axios from 'axios';
import LeagueTableContent from "./LeagueTableContent";


function LeagueTableComponent({leagueName,yearStart}) {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/football-analytics/leagueTable/'+leagueName+'/'+yearStart).then((response)=>{
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
            <th style={{backgroundColor: 'var(--beaver1)'}}scope="col">Points</th>
            <th scope="col">xGoals excl. pen. & OG</th>
            <th scope="col">xGoals against excl. pen. & OG</th>
            <th scope="col">xGoals difference excl. pen. & OG</th>
            <th scope="col">Passes allowed in own half</th>
            <th scope="col">Opponent's passes allowed in own half</th>
            <th scope="col">Passes completed in last 20 yards</th>
            <th scope="col">Opponent's passes completed in last 20 yards</th>
            <th scope="col">xG</th>
            <th scope="col">xGA</th>
            
          </tr>
        </thead>
        <tbody>          
          {data.map((leagueTable) => {
            // nr_of_element += 1;
            return (
              <LeagueTableContent
              key={leagueTable.league_table_id}
              team_name={leagueTable.team_name}
              league_name={leagueTable.league_name}
              year_start={leagueTable.year_start}
              year_end={leagueTable.year_end}
              matches={leagueTable.matches}
              wins={leagueTable.wins}
              draws={leagueTable.draws}
              loses={leagueTable.loses}
              goals={leagueTable.goals}
              goalsAgainst={leagueTable.goalsAgainst}
              pts={leagueTable.pts}
              npxGoals={leagueTable.npxGoals}
              npxGoalsAgainst={leagueTable.npxGoalsAgainst}
              npxGoalsDifference={leagueTable.npxGoalsDifference}
              // id_player={player.id_player}
              ppda={leagueTable.ppda}
              oppda={leagueTable.oppda}
              dc={leagueTable.dc}
              odc={leagueTable.odc}
              xgoals={leagueTable.xgoals}
              xgoalsAgainst={leagueTable.xgoalsAgainst}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// window.onload(insertInTable(nr_of_element, "ana", "are", "mere"));

export default LeagueTableComponent;
