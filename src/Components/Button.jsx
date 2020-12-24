import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "../Style/button.css";

function Button({ onClick, disabled, type }) {
  return (
    <div className="button">
      <button type={type} disabled={disabled} onClick={onClick}>
        <SearchOutlinedIcon />
      </button>
    </div>
  );
}

export default Button;
