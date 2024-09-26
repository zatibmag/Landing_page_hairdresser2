import React from "react";
import { Button } from "./Button";
import "../App.css";

export function Services() {
  return (
    <div>
      <h1 className="App-header">Usługi</h1>
      <div className="reasons-container">
        <h1>Strzyżenie 1</h1>
        <h1>strzyżenie 2</h1>
        <h1>farbowanie 3</h1>
      </div>
      <Button label={"Zapisz się"} onClick={""} />
    </div>
  );
}
