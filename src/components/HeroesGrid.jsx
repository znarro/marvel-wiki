import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { HeroContext } from "../contexts/HeroContext";
import Card from "./Card";

const HeroesGrid = () => {
  const [query] = useContext(HeroContext);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const BASE_URL = "https://gateway.marvel.com/v1/public/";
    const API_KEY = "fadc172f68445faee5eaabcc6a9d88d2";
    const HASH = "d05c803f568d39789062fd46f7a70134";
    const LIMIT = 40;
    let url = `${BASE_URL}characters?ts=1&apikey=${API_KEY}&hash=${HASH}`;

    async function getHeroes() {
      url += query ? `&name=${query}` : `&limit=${LIMIT}`;
      const result = await axios(url);

      setHeroes(result.data.data.results);
    }

    getHeroes();
  }, [query]);

  return (
    <SimpleGrid minChildWidth="200px" spacing="40px" px={10} pt={30} pb={100}>
      {heroes
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
