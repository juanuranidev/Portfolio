import React from "react";
import { Container, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container
      py="20"
      borderRadius="md"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Text>
        <Link
          color="blue"
          href="https://www.linkedin.com/in/juanurani/"
          target="_blank"
        >
          Juan Urani
        </Link>{" "}
        Full Stack Developer - 2023
      </Text>
    </Container>
  );
}
