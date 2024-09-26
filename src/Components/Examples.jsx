import React from "react";
import Dog from "../Images/Dog.jpg";

import "../App.css";

export function Examples() {
  return (
    <div>
      <h1 className="App-header">Examples(Haircut photos)</h1>
      <div className="reasons-container">
        <img src={Dog} alt="Dog" />
        <img src={Dog} alt="Dog" />
        <img src={Dog} alt="Dog" />
      </div>
    </div>
  );
}
