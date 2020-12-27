import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justify="center"
      align="center"
      p="5"
      bg="#9e9fa04f"
      as="footer"
      position="absolute"
      bottom="0"
      w="100%"
    >
      <Stack spacing={3}>
        <Text fontSize="md" align="center">
          Made with <span>💪</span> by Team 6
        </Text>
        <Text fontSize="sm" align="center">
          Data provided by Marvel. © 2014 Marvel{" "}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
