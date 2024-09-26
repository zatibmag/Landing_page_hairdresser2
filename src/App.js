import React from "react";
import { Head } from "./Components/Head";
import { Head_info } from "./Components/Head_Info";
import { Central_Image } from "./Components/Central_Image";
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
      <Head_info />
      <Central_Image />
      <Reasons />
      <Examples />
      <Services />
      <Reviews />
      <Dyploms />
      <Ratings />
      <Socials />
    </>
  );
}

export default App;
