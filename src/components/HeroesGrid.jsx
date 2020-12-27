import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { HeroContext } from "../contexts/HeroContext";
import Card from "./Card";

const HeroesGrid = () => {
  const [hero] = useContext(HeroContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const BASE_URL = "https://gateway.marvel.com/v1/public/";
    const API_KEY = "fadc172f68445faee5eaabcc6a9d88d2";
    const HASH = "d05c803f568d39789062fd46f7a70134";
    const URL = `${BASE_URL}characters?ts=1&apikey=${API_KEY}&hash=${HASH}`;

    async function getCharacters() {
      const LIMIT = 40;

      const result = await axios(URL + `&limit=${LIMIT}`);
      // console.log(result.data.data.results);
      setCharacters(result.data.data.results);
    }

    async function getHero() {
      const result = await axios(URL + `&name=${hero}`);

      setCharacters(result.data.data.results);
    }

    hero ? getHero() : getCharacters();
  }, [hero]);

  return (
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
            <NavLink key={id} to={`/${id}`}>
              <Card
                name={name}
                image={path + "/portrait_incredible." + extension}
              />
            </NavLink>
          );
        })}
    </SimpleGrid>
  );
};

export default HeroesGrid;
