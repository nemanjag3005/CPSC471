import React from "react";
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
    </>
  );
};

export default Home;
