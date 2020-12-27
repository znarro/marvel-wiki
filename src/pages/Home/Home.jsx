import React from "react";
import { Box } from "@chakra-ui/react";
import { QueryContextProvider } from "../../contexts/QueryContext";
import HeroesGrid from "../../components/HeroesGrid";
import Search from "../../components/Search";

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
