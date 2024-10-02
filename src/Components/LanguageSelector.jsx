import React from "react";
import { useLanguage } from "../Context/LanguageContext";

export function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <select
        id="language"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="Polish">Polish</option>
        <option value="English">English</option>
        <option value="Ukrainian">Ukrainian</option>
      </select>
    </div>
  );
}
