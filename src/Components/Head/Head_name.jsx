import React from "react";
import "../Css/Head.css";
import { useLanguage } from "../../Context/LanguageContext";

export function Head_name() {
  const { selectedLanguage } = useLanguage();

  const getName = () => {
    switch (selectedLanguage) {
      case "Polish":
        return "Olga Hraboviuk";
      case "English":
        return "Olga Hraboviuk";
      case "Ukrainian":
        return "Ольга Грабов'юк";
      default:
        return "Olga Hraboviuk";
    }
  };

  return <h1 className="App-header">{getName()}</h1>;
}
