import React from "react";
import Main from "./Main";
import { LanguageProvider } from "./Context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
}

export default App;
