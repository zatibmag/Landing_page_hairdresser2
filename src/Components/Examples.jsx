import React from "react";
import Haircut1 from "../Images/Haircut1.jpg";
import Haircut2 from "../Images/Haircut2.jpg";
import Haircut3 from "../Images/Haircut3.jpg";
import Haircut4 from "../Images/Haircut4.jpg";
import Haircut5 from "../Images/Haircut5.jpg";
import Haircut6 from "../Images/Haircut6.jpg";

import "./Css/Examples.css";

export function Examples() {
  return (
    <div>
      <h1 className="App-header">Examples (Haircut photos)</h1>
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
