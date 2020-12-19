import React from "react";
import { Flex, Image, Heading } from "@chakra-ui/react";

const Card = ({ name, image }) => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      p="5"
      maxW="320px"
      borderWidth="1px"
    >
      <Image borderRadius="md" src={image} alt={name} />
      <Heading mt={2} as="h2" size="md">
        {name}
      </Heading>
    </Flex>
  );
};

export default Card;
