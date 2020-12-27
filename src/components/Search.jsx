import React, { useContext } from "react";
import { Flex, Center, Input } from "@chakra-ui/react";
import { HeroContext } from "../contexts/HeroContext";

const Search = () => {
  const [query, setQuery] = useContext(HeroContext);
  const handleChange = (event) => setQuery(event.target.value);

  return (
    <Flex as="nav" justify="center">
      <Center w="400px">
        <Input
          value={query}
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
