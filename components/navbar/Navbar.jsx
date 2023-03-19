import React from "react";
import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <Container p="5" borderRadius="md" maxW="container.xl">
      <Flex justifyContent="space-between">
        <Text>Marca</Text>
        <HStack spacing="10">
          <Button
            variant="link"
            color="#000000"
            _hover={{ textDecoration: "none" }}
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
            color="#000000"
            _hover={{ textDecoration: "none" }}
            animation={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Link to="experience" smooth={true} duration={500}>
              Experiencia
            </Link>
          </Button>
          <Button
            variant="link"
            color="#000000"
            _hover={{ textDecoration: "none" }}
            animation={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Link to="projects" smooth={true} duration={500}>
              Proyectos
            </Link>
          </Button>
          <Button
            variant="link"
            color="#000000"
            _hover={{ textDecoration: "none" }}
            css={{
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
