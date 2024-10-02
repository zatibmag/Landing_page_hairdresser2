import React from "react";
import "../Css/Head.css";
import { useLanguage } from "../../Context/LanguageContext";

export function Head_info() {
  const { selectedLanguage } = useLanguage();

  const getHeading = () => {
    switch (selectedLanguage) {
      case "Polish":
        return "Fryzjer Kolorysta Trycholog";
      case "English":
        return "Hairdresser Colorist Trichologist";
      case "Ukrainian":
        return "Перукар Колорист Трихолог";
      default:
        return "Fryzjer Kolorysta Trycholog";
    }
  };

  return <h1 className="App-header">{getHeading()}</h1>;
}
