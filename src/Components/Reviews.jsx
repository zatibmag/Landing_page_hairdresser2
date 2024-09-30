import React from "react";
import Review1 from "../Images/Review1.png";
import Review2 from "../Images/Review2.png";
import Review3 from "../Images/Review3.png";
import Review4 from "../Images/Review4.png";
import Review5 from "../Images/Review5.png";
import Review6 from "../Images/Review6.png";
import { Button } from "./Button";
import "./Css/Reviews.css";

export function Reviews() {
  return (
    <div>
      <h1 className="titul-review">Reviews</h1>
      <div className="reasons-container-reviews">
        <img src={Review1} alt="Review1" />
        <img src={Review2} alt="Review2" />
        <img src={Review6} alt="Review6" />
        <img src={Review3} alt="Review3" />
        <img src={Review4} alt="Review4" />
        <img src={Review5} alt="Review5" />
        <Button label={"Więcej"} />
      </div>
    </div>
  );
}