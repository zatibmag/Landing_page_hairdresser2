import React from "react";
import Dog from "../Images/Dog.jpg";
import "../App.css";

export function Central_Image() {
  return (
    <div className="App-header">
      <img src={Dog} alt="Dog" />
    </div>
  );
}
