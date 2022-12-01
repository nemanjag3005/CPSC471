import React from "react";
import Fairy from "./Fairy";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Locations from "./Locations";
import Memberships from "./Memberships";

const Home = () => {
  return (
    <>
      <Hero />
      <Hero2 />
      <Locations />
      <Memberships />
      <FAQ />
      <Fairy />
    </>
  );
};

export default Home;
