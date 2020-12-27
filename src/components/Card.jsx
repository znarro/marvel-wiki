import React from "react";
import { Flex, Image, Heading } from "@chakra-ui/react";

const Card = ({ name, image }) => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      bg="white"
      p="5"
      maxW="320px"
      borderWidth="1px"
      _hover={{ boxShadow: "10px 5px 5px red" }}
    >
      <Image borderRadius="md" src={image} alt={name} />
      <Heading mt={2} as="h2" size="md" textStyle="h3">
        {name}
      </Heading>
    </Flex>
  );
};

export default Card;
