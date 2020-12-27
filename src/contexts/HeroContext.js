import React, { createContext, useState } from "react";

const HeroContext = createContext();

const HeroContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const value = [query, setQuery];

  return <HeroContext.Provider value={value} {...props} />;
};

export { HeroContext, HeroContextProvider };
