import React, { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { HeroContextProvider } from "../../contexts/HeroContext";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const BASE_URL = "https://gateway.marvel.com/v1/public/";
      const API_KEY = "fadc172f68445faee5eaabcc6a9d88d2";
      const HASH = "d05c803f568d39789062fd46f7a70134";
      const LIMIT = 40;

      const result = await axios(
        `${BASE_URL}characters?ts=1&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}`
      );
      console.log(result.data.data.results);
      setCharacters(result.data.data.results);
    }

    getCharacters();
  }, []);

  return (
    <Box>
      <Heading as="h1" size="xl" align="center">
        Heroes
      </Heading>
      <HeroContextProvider>
        <Search />
        <SimpleGrid minChildWidth="200px" spacing="40px" p="10">
          {characters
            .filter(
              (item) =>
                item.thumbnail.path !==
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            )
            .map((character) => {
              const {
                id,
                name,
                thumbnail: { path, extension },
              } = character;

              return (
                <Card
                  key={id}
                  name={name}
                  image={path + "/portrait_incredible." + extension}
                />
              );
            })}
        </SimpleGrid>
      </HeroContextProvider>
    </Box>
  );
};

export default Home;
