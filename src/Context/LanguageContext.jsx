import * as React from "react";
import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext({
  selectedLanguage: "Polish",
  setSelectedLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Polish");

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
