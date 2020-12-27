import React from "react";
import { Box } from "@chakra-ui/react";
import HeroesGrid from "../../components/HeroesGrid";
import Search from "../../components/Search";
import { QueryContextProvider } from "../../contexts/QueryContext";

const Home = () => {
  return (
    <Box mt="120px">
      <QueryContextProvider>
        <Search />
        <HeroesGrid />
      </QueryContextProvider>
    </Box>
  );
};

export default Home;
