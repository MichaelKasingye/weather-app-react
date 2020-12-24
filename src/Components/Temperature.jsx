import React from "react";
import "../Style/Temperature.css";
function Temperature(props) {
  return (
    <div>
      <h4 className="temps">
        <span className="temps_section">
          <span className="temps_title">{props.tempsTitle}</span>
          <br />
          <p>{props.tempsDegree}&deg;</p>
        </span>
      </h4>
    </div>
  );
}

export default Temperature;
