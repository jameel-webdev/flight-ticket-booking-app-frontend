import React from "react";
import SidebarComponent from "../components/SidebarComponent";
import SearchBox from "../components/SearchBox";
import PopularsectionComponent from "../components/PopularsectionComponent";

const HeroPage = () => {
  return (
    <>
      <SidebarComponent />
      <SearchBox />
      <PopularsectionComponent />
    </>
  );
};

export default HeroPage;
