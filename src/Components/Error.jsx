import React from "react";

import Alert from "@material-ui/lab/Alert";

function Error(props) {
  return (
    <div className="error">
      <Alert severity="info">
        <strong>
          <p>Sorry, there is no City as such. </p>
          <p>Perharps check the spelling typed</p>
        </strong>{" "}
      </Alert>
    </div>
  );
}

export default Error;
