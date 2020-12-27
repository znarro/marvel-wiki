import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justify="center" align="center" p="5" bg="#9e9fa04f">
      <Stack spacing={3}>
        <Text fontSize="md" align="center">
          Made with 💪 by Team 6
        </Text>
        <Text fontSize="sm" align="center">
          Data provided by Marvel. © 2014 Marvel{" "}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
