import React from "react";
import { Head } from "./Components/Head/Head";

import { Reasons } from "./Components/Reasons";
import { Examples } from "./Components/Examples";
import { Services } from "./Components/Services";
import { Reviews } from "./Components/Reviews";
import { Dyploms } from "./Components/Dyploms";
import { Ratings } from "./Components/Ratings";
import { Socials } from "./Components/Socials";

function App() {
  return (
    <>
      <Head />
      <Reasons />
      <Examples />
      <Services />
      <Reviews />
      <Dyploms />
      {/* <Ratings />
      <Socials /> */}
    </>
  );
}

export default App;
