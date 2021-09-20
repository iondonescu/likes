import React, { useState, useEffect } from "react";
import like from "./img/like.png";
import "./Pupil.css";
//const like = require('./img/like.png');

const Pupil = ({ item, selectedNumberOfLikes, setSelectedNumerOfLikes }) => {
  const [number, setNumber] = useState(selectedNumberOfLikes);
  const mystyle = {
    color: "red",
    marginLeft: "5px",
    marginRight: "5px",
    width: "40px",
    height: "30px"
  };
  return (
    <tr>
      <td>
        <h2 className="ui center aligned header">{item.name}</h2>
      </td>
      <td className="single line">
        <h2 className="ui center aligned header">{item.location}</h2>
      </td>
      <td className="single line">
        <h2 className="ui center aligned header">{number}</h2>
      </td>
      <td>
          <div className="center aligned">
        <button style={mystyle}  onClick={() => setNumber(number + 1)}>
        <i className="thumbs up outline icon"></i>
        </button>
        <button style={mystyle} onClick={() => setNumber(number - 1)}>
        <i className="thumbs down outline icon"></i>
        </button>
        </div>
      </td>
    </tr>
  );
};

export default Pupil;
