import React, { createContext, useState } from "react";

const HeroContext = createContext();

const HeroContextProvider = (props) => {
  const [hero, setHero] = useState([]);
  const value = [hero, setHero];

  return <HeroContext.Provider value={value} {...props} />;
};

export { HeroContext, HeroContextProvider };
