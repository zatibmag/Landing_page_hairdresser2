import React from "react";
import Google_maps from "../Images/Google_Maps_icon.png";
import Instagram from "../Images/Instagram_icon.png";
import Facebook from "../Images/Facebook_icon.png";
import Booksy from "../Images/Booksy.png";
import "./Css/BottomPart.css";

export function BottomPart() {
  return (
    <div>
      <div className="reasons-container-socials">
        <img src={Instagram} alt="Instagram" />
        <img src={Google_maps} alt="Google_maps" />
        <img src={Facebook} alt="Facebook" />
        <img src={Booksy} alt="Booksy" />
      </div>
    </div>
  );
}
