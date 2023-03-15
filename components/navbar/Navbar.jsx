import React from "react";
import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Container p="5" borderRadius="md" maxW="container.xl">
      <Flex justifyContent="space-between">
        <Text>Marca</Text>
        <HStack spacing="10">
          <Button
            variant="link"
            animation={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Sobre mi
          </Button>
          <Button
            variant="link"
            animation={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Proyectos
          </Button>
          <Button
            variant="link"
            animation={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Informacion
          </Button>
          <Button
            variant="link"
            animation={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Contacto
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}
