import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const result = await axios(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=fadc172f68445faee5eaabcc6a9d88d2&hash=d05c803f568d39789062fd46f7a70134"
      );
      console.log(result.data.data.results);
      setCharacters(result.data.data.results);
    }

    getCharacters();
  }, []);

  return (
    <div>
      <Header />
      <h1>Heroes</h1>
      <div>
        {characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            image={
              character.thumbnail.path +
              "/portrait_small." +
              character.thumbnail.extension
            }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
