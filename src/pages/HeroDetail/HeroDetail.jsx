import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SimpleGrid, Link } from "@chakra-ui/react";
import axios from "axios";
import Card from "../../components/Card";

const HeroDetail = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function getComics() {
      const BASE_URL = "https://gateway.marvel.com/v1/public/";
      const API_KEY = "fadc172f68445faee5eaabcc6a9d88d2";
      const HASH = "d05c803f568d39789062fd46f7a70134";
      const URL = `${BASE_URL}characters/${id}/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`;

      const result = await axios(URL);
      console.log(result.data.data.results);
      setComics(result.data.data.results);
    }

    getComics();
  }, [id]);

  return (
    <SimpleGrid mt="120px" minChildWidth="200px" spacing="40px" p="10">
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
  );
};

export default HeroDetail;
