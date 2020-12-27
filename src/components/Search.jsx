import React, { useContext } from "react";
import { Flex, Center, Input } from "@chakra-ui/react";
import { QueryContext } from "../contexts/QueryContext";

const Search = () => {
  const [query, setQuery] = useContext(QueryContext);
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
