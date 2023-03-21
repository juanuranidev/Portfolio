import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";

export default function Header() {
  return (
    <Container
      py="40"
      borderRadius="md"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      id="header"
    >
      <Animation>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} fontWeight="600">
          Hola, bienvenido a mi porfolio.
        </Text>
        <Text
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
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
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="700"
          css={{
            backgroundColor: "#fff",
            color: "#3792e4",
            animation: "change-color 3s infinite",
          }}
        >
          Frontend Developer
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          w="100%"
          textAlign="right"
          fontWeight="700"
        >
          minimalista.
        </Text>
      </Animation>
    </Container>
  );
}
