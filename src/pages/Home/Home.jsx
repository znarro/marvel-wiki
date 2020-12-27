import React from "react";
import { Box } from "@chakra-ui/react";
import HeroesGrid from "../../components/HeroesGrid";
import Search from "../../components/Search";
import { HeroContextProvider } from "../../contexts/HeroContext";

const Home = () => {
  return (
    <Box mt="120px">
      <HeroContextProvider>
        <Search />
        <HeroesGrid />
      </HeroContextProvider>
    </Box>
  );
};

export default Home;
