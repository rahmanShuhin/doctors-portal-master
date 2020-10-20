import React from "react";
import "./NotFound.css";
const NotFound = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="notfound">
      <h2>404</h2>
      <h3>Not Found</h3>
      <button className="btn appoint-btn" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
