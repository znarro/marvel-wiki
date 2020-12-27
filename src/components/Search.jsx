import React, { useContext } from "react";
import { Flex, Center, Input } from "@chakra-ui/react";
import { HeroContext } from "../contexts/HeroContext";

const Search = () => {
  const [hero, setHero] = useContext(HeroContext);
  const handleChange = (event) => setHero(event.target.value);

  return (
    <Flex as="nav" justify="center" p="5">
      <Center w="400px">
        <Input
          value={hero}
          onChange={handleChange}
          placeholder="Search"
          textStyle="input"
          bg="white"
          focusBorderColor="#ff0000"
          size="md"
        />
      </Center>
    </Flex>
  );
};

export default Search;
