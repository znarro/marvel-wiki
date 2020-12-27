import React, { createContext, useState } from "react";

const QueryContext = createContext();

const QueryContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const value = [query, setQuery];

  return <QueryContext.Provider value={value} {...props} />;
};

export { QueryContext, QueryContextProvider };
