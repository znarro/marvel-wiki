import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import HeroesGrid from "../../components/HeroesGrid";
import Search from "../../components/Search";
import { HeroContextProvider } from "../../contexts/HeroContext";

const Home = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" align="center">
        Heroes
      </Heading>
      <HeroContextProvider>
        <Search />
        <HeroesGrid />
      </HeroContextProvider>
    </Box>
  );
};

export default Home;
