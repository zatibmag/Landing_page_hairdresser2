import React from "react";
import Dog from "../Images/Dog.jpg";

import "../App.css";

export function Reviews() {
  return (
    <div>
      <h1 className="App-header">Reviews</h1>
      <div className="reasons-container-reviews">
        <img src={Dog} alt="Dog" />
        <img src={Dog} alt="Dog" />
        <img src={Dog} alt="Dog" />
        <img src={Dog} alt="Dog" />
        <img src={Dog} alt="Dog" />
        <img src={Dog} alt="Dog" />
      </div>
    </div>
  );
}
