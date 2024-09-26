import React from "react";
import Head_photo from "../Images/Head_photo.png";
import "./Css/Images.css";

export function Central_Image() {
  return (
    <div>
      <img className="centered-image" src={Head_photo} alt="Head_photo" />
    </div>
  );
}
