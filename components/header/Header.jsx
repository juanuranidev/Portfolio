import React from "react";
import { css } from "@emotion/react";
import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container
      py="40"
      borderRadius="md"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text fontSize="lg" fontWeight="600">
        Hola. Bienvenido a mi porfolio.
      </Text>
      <Text
        fontSize="7xl"
        fontWeight="700"
        css={{
          backgroundColor: "#fff",
          color: "#3792e4",
          animation: "change-color 3s infinite",
        }}
      >
        Juan Urani
      </Text>
      <Text
        fontSize="7xl"
        fontWeight="700"
        css={{
          backgroundColor: "#fff",
          color: "#3792e4",
          animation: "change-color 3s infinite",
        }}
      >
        Frontend Developer
      </Text>
    </Container>
  );
}
