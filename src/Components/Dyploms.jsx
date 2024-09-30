import React from "react";
import Certyficate1 from "../Images/certificate1_page-0001.jpg";
import Certyficate2 from "../Images/certificate2_page-0001.jpg";
import Certyficate3 from "../Images/certificate3_page-0001.jpg";
import Certyficate4 from "../Images/certificate4_page-0001.jpg";
import Certyficate5 from "../Images/certificate5_page-0001.jpg";
import Certyficate6 from "../Images/certificate6_page-0001.jpg";
import Certyficate7 from "../Images/certificate7_page-0001.jpg";
import "./Css/Reviews.css";

export function Dyploms() {
  return (
    <div>
      <h1 className="titul-review">Certyfikaty</h1>
      <div className="reasons-container-reviews small-image">
        <img src={Certyficate1} alt="Certyficate1" />
        <img src={Certyficate2} alt="Certyficate2" />
        <img src={Certyficate3} alt="Certyficate3" />
        <img src={Certyficate7} alt="Certyficate7" />
        <img src={Certyficate4} alt="Certyficate4" />
        <img src={Certyficate5} alt="Certyficate5" />
        <img src={Certyficate6} alt="Certyficate6" />
      </div>
    </div>
  );
}
