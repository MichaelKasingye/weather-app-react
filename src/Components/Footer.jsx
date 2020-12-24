import React from "react";
import "../Style/footer.css";
function footer({ name, link }) {
  return (
    <div>
      <div className="footer">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Author - {name}
        </a>
      </div>
    </div>
  );
}

export default footer;
