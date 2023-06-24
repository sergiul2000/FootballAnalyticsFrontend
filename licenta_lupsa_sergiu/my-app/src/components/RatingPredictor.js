import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "./RatingPredictor.css";
import TextField from '@mui/material/TextField';

import React from "react";
import { useNavigate } from 'react-router-dom';
import  { useState,useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function RatingPredictor() {
    const [start_games, setStartGames] = useState([]);
    const [sub_games, setSubGames] = useState([]);
    const [mins, setMins] = useState([]);
    const [goals, setGoals] = useState([]);
    const [assists, setAssists] = useState([]);
    const [shot_per_game, setShotPerGame] = useState([]);
    const [offsides_per_game, setOffsidesPerGame] = useState([]);
    const [total_shots, setTotalShots] = useState([]);
    const [fouls_per_game, setFoulsPerGame] = useState([]);
    const [total_fouls, setTotalFouls] = useState([]);
    const [yellow_cards, setYellowCards] = useState([]);
    const [red_cards, setRedCards] = useState([]);
    const [clean_sheets, setCleanSheets] = useState([]);
    const [points, setPoints] = useState([]);
    const [xG, setXG] = useState([]);
    const [xA, setXA] = useState([]);
    
    const navigate = useNavigate();

    const validateForm = () => {
        if (
            isNaN(parseInt(start_games)) ||
            isNaN(parseInt(sub_games)) ||
            isNaN(parseInt(mins)) ||
            isNaN(parseInt(goals)) ||
            isNaN(parseInt(assists)) ||
            isNaN(parseFloat(shot_per_game)) ||
            isNaN(parseFloat(offsides_per_game)) ||
            isNaN(parseInt(total_shots)) ||
            isNaN(parseFloat(fouls_per_game)) ||
            isNaN(parseInt(total_fouls)) ||
            isNaN(parseInt(yellow_cards)) ||
            isNaN(parseInt(red_cards)) ||
            isNaN(parseInt(clean_sheets)) ||
            isNaN(parseInt(points)) ||
            isNaN(parseFloat(xG)) ||
            isNaN(parseFloat(xA))
        ) {
          return false; // At least one field is empty
        }
      
        return true; // All fields have a value
      };

      const predictRating = (()=>{
        if(validateForm()) {
            axios.post("http://127.0.0.1:8000/predict/rating/", {
              
        start_games: parseInt(start_games),
        sub_games: parseInt(sub_games),
        mins: parseInt(mins),
        goals: parseInt(goals),
        assists: parseInt(assists),
        shot_per_game: parseFloat(shot_per_game),
        offsides_per_game: parseFloat(offsides_per_game),
        total_shots: parseInt(total_shots),
        fouls_per_game: parseFloat(fouls_per_game),
        total_fouls: parseInt(total_fouls),
        yellow_cards: parseInt(yellow_cards),
        red_cards: parseInt(red_cards),
        clean_sheets: parseInt(clean_sheets),
        points: parseInt(points),
        xG: parseFloat(xG),
        xA: parseFloat(xA)
          }, {
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          })
              .then((response) =>  { 
                // console.log(response.data.rating)
                alert("The rating of this player is: "+response.data.rating)})
              .catch((err) => console.log(err));
        }
        else {
            alert("Make sure you completed all fields with numerical values!")
        }
      });

      return (
        <div id="ratingDiv">
          {/* <h1>Rating Prediction</h1> */}
          <Form>
            <Card>
                <Card.Title><h1>Rating Prediction</h1></Card.Title>
              <Card.Body>
          {/* <p>*Complete the following formular with the stats of the player you are interested in. </p> */}
          <div className="form-row">
            <div className="form-col">
          <Card.Text>
            <TextField
            id="Start Games"
            label="Number of start Games"
            type="number"
            onChange={(event) => setStartGames(event.target.value)}
            /> 
            </Card.Text><Card.Text>
            <TextField
              id="sub_games"
              label="Number of Sub Games"
              type="number"
              onChange={(event) => setSubGames(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="mins"
              label="Minutes Played"
              type="number"
              onChange={(event) => setMins(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="goals"
              label="Goals"
              type="number"
              onChange={(event) => setGoals(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="assists"
              label="Assists"
              type="number"
              onChange={(event) => setAssists(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="shot_per_game"
              label="Shots per Game"
              type="number"
              onChange={(event) => setShotPerGame(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="offsides_per_game"
              label="Offsides per Game"
              type="number"
              onChange={(event) => setOffsidesPerGame(event.target.value)}
            />
          </Card.Text>
            {/* <div className="form-col"> */}
          <Card.Text>
            <TextField
              id="total_shots"
              label="Total Shots"
              type="number"
              onChange={(event) => setTotalShots(event.target.value)}
            />
          </Card.Text>
          </div>
          <div className="form-col">
          {/* <div className="form-row"> */}
          <Card.Text>
            <TextField
              id="fouls_per_game"
              label="Fouls per Game"
              type="number"
              onChange={(event) => setFoulsPerGame(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="total_fouls"
              label="Total Fouls"
              type="number"
              onChange={(event) => setTotalFouls(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="yellow_cards"
              label="Yellow Cards"
              type="number"
              onChange={(event) => setYellowCards(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="red_cards"
              label="Red Cards"
              type="number"
              onChange={(event) => setRedCards(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="clean_sheets"
              label="Clean Sheets"
              type="number"
              onChange={(event) => setCleanSheets(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="points"
              label="Points of the Team"
              type="number"
              onChange={(event) => setPoints(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="xG"
              label="Expected Goals (xG)"
              type="number"
              onChange={(event) => setXG(event.target.value)}
            />
          </Card.Text>
          <Card.Text>
            <TextField
              id="xA"
              label="Expected Assists (xA)"
              type="number"
              onChange={(event) => setXA(event.target.value)}
            />
          </Card.Text>
          </div>
          </div>
                <Button id="ratingButton" variant="warning" onClick={predictRating}>
                  Calculate rating
                </Button>
              </Card.Body>
            </Card>
          </Form>
        </div>
      );
      
}

export default RatingPredictor;
