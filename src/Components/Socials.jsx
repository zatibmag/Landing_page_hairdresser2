import React from "react";
import Google_maps from "../Images/Google_Maps_icon_(2015-2020).svg.png";
import Instagram from "../Images/Instagram_icon.png.webp";

import "../App.css";

export function Socials() {
  return (
    <div>
      <div className="reasons-container-socials">
        <img src={Instagram} alt="Dog" />
        <img src={Google_maps} alt="Dog" />
      </div>
    </div>
  );
}
