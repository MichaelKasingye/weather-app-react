import React from "react";
import Temperature from "./Temperature";
import "../Style/weatherBody.css";

function Weatherbody(props) {
  return (
    <div className="weather_body">
      <h1 className="title">
        {props.city},{props.country}
      </h1>
      <img className="image" src={props.weatherIcon} alt="Weather Icon" />
      <h3 className="description">{props.description}</h3>
      <div className="temperatures">
        <Temperature tempsTitle="Main Temp" tempsDegree={props.temp_celsius} />
        <Temperature tempsTitle="Min Temp" tempsDegree={props.temp_min} />
        <Temperature tempsTitle="Max Temp" tempsDegree={props.temp_max} />
      </div>
    </div>
  );
}

export default Weatherbody;
