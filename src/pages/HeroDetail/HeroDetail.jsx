import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, SimpleGrid, Link, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import Card from "../../components/Card";
import { HeroContext } from "../../contexts/HeroContext";

const HeroDetail = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  const [comics, setComics] = useState([]);
  const [hero] = useContext(HeroContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function getComics() {
      const BASE_URL = "https://gateway.marvel.com/v1/public/";
      const API_KEY = "fadc172f68445faee5eaabcc6a9d88d2";
      const HASH = "d05c803f568d39789062fd46f7a70134";
      const URL = `${BASE_URL}characters/${id}/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`;

      const result = await axios(URL);

      setComics(result.data.data.results);
    }

    getComics();
  }, [id]);

  return (
    <Box as="main" mt="100px" px={10} pt={30} pb={100}>
      <Flex
        as="article"
        direction="column"
        justify="flex-end"
        h={350}
        p={30}
        mb={5}
        borderRadius="5px"
        bgImage={`url(${
          hero[0].thumbnail.path + "." + hero[0].thumbnail.extension
        })`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center center"
      >
        <Heading size="3xl" color="white" textShadow="0px 0px 5px #000">
          {hero[0].name}
        </Heading>
        <Text fontSize="xl" color="white" textShadow="0px 0px 5px #000">
          {hero[0].description}
        </Text>
      </Flex>
      <SimpleGrid as="section" minChildWidth="200px" spacing="40px">
        {comics
          .filter((item) => item.images.length > 0)
          .map((comic) => {
            const { id, images, title, urls } = comic;
            const { path, extension } = images[0];

            return (
              <Link key={id} href={`${urls[0].url}`} isExternal>
                <Card
                  name={title}
                  image={path + "/portrait_incredible." + extension}
                />
              </Link>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default HeroDetail;
