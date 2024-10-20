import React, { useState, useEffect } from "react";
import "../Css/Head.css";
import { useLanguage } from "../../Context/LanguageContext";

export function Head_info() {
  const { selectedLanguage } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getHeading = () => {
    switch (selectedLanguage) {
      case "Polish":
        return isMobile ? (
          <>
            Fryzjer Kolorysta <br /> &nbsp; &nbsp; &nbsp; Trycholog
          </>
        ) : (
          <>Fryzjer Kolorysta Trycholog</>
        );
      case "English":
        return isMobile ? (
          <>
            Hairdresser Colorist <br /> &nbsp; &nbsp; &nbsp; Trichologist
          </>
        ) : (
          <>Hairdresser Colorist Trichologist</>
        );
      case "Ukrainian":
        return isMobile ? (
          <>
            Перукар Колорист <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Трихолог
          </>
        ) : (
          <>Перукар Колорист Трихолог</>
        );
      default:
        return isMobile ? (
          <>
            Fryzjer Kolorysta <br /> &nbsp; &nbsp; &nbsp; Trycholog
          </>
        ) : (
          <>Fryzjer Kolorysta Trycholog</>
        );
    }
  };

  return <h1 className="App-header">{getHeading()}</h1>;
}
