import React from "react";
import Haircut1 from "../Images/Haircut1.png";
import Haircut2 from "../Images/Haircut2.png";
import Haircut3 from "../Images/Haircut3.png";
import Haircut4 from "../Images/Haircut4.png";
import Haircut5 from "../Images/Haircut5.png";
import Haircut6 from "../Images/Haircut6.png";
import "./Css/Examples.css";

export function Examples() {
  return (
    <div className="examples-bg">
      <h1 className="titul">Przykłady</h1>
      <div className="examples-grid-container">
        <img src={Haircut1} alt="Haircut1" />
        <img src={Haircut2} alt="Haircut2" />
        <img src={Haircut3} alt="Haircut3" />
        <img src={Haircut4} alt="Haircut4" />
        <img src={Haircut5} alt="Haircut5" />
        <img src={Haircut6} alt="Haircut6" />
      </div>
    </div>
  );
}
