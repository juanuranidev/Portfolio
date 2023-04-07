import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";

export default function Header() {
  return (
    <Container
      py="40"
      id="header"
      display="flex"
      borderRadius="md"
      textAlign="center"
      alignItems="center"
      maxW="container.xl"
      flexDirection="column"
    >
      <Animation>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} fontWeight="600">
          Hola, bienvenido a mi porfolio.
        </Text>
        <Text
          fontWeight="700"
          css={{
            backgroundColor: "#fff",
            color: "#3792e4",
            animation: "change-color 3s infinite",
          }}
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
        >
          Juan Urani
        </Text>
        <Text
          fontWeight="700"
          css={{
            backgroundColor: "#fff",
            color: "#3792e4",
            animation: "change-color 3s infinite",
          }}
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
        >
          Full Stack Developer
        </Text>
        <Text
          w="100%"
          textAlign="right"
          fontWeight="700"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
        >
          minimalista.
        </Text>
      </Animation>
    </Container>
  );
}
