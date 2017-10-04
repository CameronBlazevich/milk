import React from "react";

function UnauthenticatedWarningMessage(props) {
  return (
    <div className="unauthenticated-warning-container row">
      <div className="col-md-6 col-md-offset-3 alert-info">
        <strong>Info: </strong>Since you are not logged in, we have provided you
        with some arbitrary hand range data. You will have the ability to
        temporarily save your own hand ranges, however, upon leaving the page or
        refreshing the browser, that data will be lost.
      </div>
    </div>
  );
}

export default UnauthenticatedWarningMessage;
