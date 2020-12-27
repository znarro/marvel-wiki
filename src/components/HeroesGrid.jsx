import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { QueryContext } from "../contexts/QueryContext";
import { HeroContext } from "../contexts/HeroContext";
import Card from "./Card";

const HeroesGrid = () => {
  const [query] = useContext(QueryContext);
  const [characters, setCharacters] = useState([]);
  const [, setHero] = useContext(HeroContext);

  useEffect(() => {
    async function getHeroes() {
      const BASE_URL = "https://gateway.marvel.com/v1/public/";
      const API_KEY = "fadc172f68445faee5eaabcc6a9d88d2";
      const HASH = "d05c803f568d39789062fd46f7a70134";
      const LIMIT = 40;
      let url = `${BASE_URL}characters?ts=1&apikey=${API_KEY}&hash=${HASH}`;

      url += query ? `&name=${query}` : `&limit=${LIMIT}`;
      const result = await axios(url);

      setCharacters(result.data.data.results);
    }

    getHeroes();
  }, [query]);

  function handleClick(id) {
    let newHero = characters.filter((heroe) => heroe.id === id);
    setHero(newHero);
  }

  return (
    <SimpleGrid minChildWidth="200px" spacing="40px" px={10} pt={30} pb={100}>
      {characters
        .filter(
          (item) =>
            item.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
        )
        .map((heroe) => {
          const {
            id,
            name,
            thumbnail: { path, extension },
          } = heroe;

          return (
            <NavLink onClick={() => handleClick(id)} key={id} to={`/${id}`}>
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
