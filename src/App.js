import React from "react";
import { Head } from "./Components/Head/Head";

import { Reasons } from "./Components/Reasons";
import { Examples } from "./Components/Examples";
import { Services } from "./Components/Services";
import { Reviews } from "./Components/Reviews";
import { Dyploms } from "./Components/Dyploms";
import { BottomPart } from "./Components/BottomPart";

function App() {
  return (
    <>
      <Head />
      <Reasons />
      <Examples />
      <Services />
      <Reviews />
      <Dyploms />
      <BottomPart />
    </>
  );
}

export default App;
