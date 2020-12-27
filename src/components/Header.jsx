import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";
import buildings from "../buildings.png";

const Header = () => {
  return (
    <Flex
      pos="fixed"
      top="0"
      zIndex={2}
      w="100%"
      h="100px"
      bgImage={`url(${buildings})`}
      bgSize="contain"
      align="center"
      justify="center"
      as="header"
    >
      <NavLink to="/">
        <Heading
          as="h1"
          size="xl"
          textStyle="h1"
          color="white"
          textShadow="0px 0px 5px #ff0000"
          _hover={{ textShadow: "0px 0px 15px #ff000099" }}
        >
          Marvel Heroes Wiki
        </Heading>
      </NavLink>
    </Flex>
  );
};

export default Header;
