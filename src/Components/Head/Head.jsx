import React from "react";
import { Head_info } from "./Head_Info";
import { Central_Image } from "./Central_image";
import { Head_name } from "./Head_name";
import Head_bg from "../../Images/Head_bg.jpg";
import { LanguageSelector } from "../LanguageSelector";
import "../Css/Head.css";

export function Head() {
  return (
    <div className="head-container">
      <img className="head-bg" src={Head_bg} alt="Head_bg" />
      <LanguageSelector />
      <div className="head-overlay">
        <Head_name />
        <Head_info />
        <Central_Image />
      </div>
    </div>
  );
}
