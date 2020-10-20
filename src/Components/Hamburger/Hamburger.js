import React from "react";
import "./Hamburger.css";
const Hamburger = () => {
  const hamburger = () => {
    document.getElementsByClassName("sidenav")[0].classList.toggle("active");
  };
  return (
    <div className="hamburger" onClick={hamburger}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Hamburger;
