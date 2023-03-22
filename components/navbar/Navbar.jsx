import React from "react";
import {
  Flex,
  Text,
  Image,
  HStack,
  Button,
  Collapse,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import CloseMenu from "../../assets/icons/CloseMenu.png";
import OpenMenu from "../../assets/icons/OpenMenu.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      maxW="container.full"
      shadow="md"
      position="sticky"
      bg="#ffffff"
      zIndex="10"
      top="0"
      m="0"
      w="100%"
      px="6"
      py="3"
      pb={isOpen ? "0" : "3"}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Container
        borderRadius="md"
        maxW="container.xl"
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        w="100%"
        p="0"
      >
        <Flex justifyContent="space-between" w="100%">
          <Link to="header" smooth={true} duration={500} offset={100}>
            <Text className="name" fontSize="32" cursor="pointer">
              Juan Urani
            </Text>
          </Link>
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
              <Link to="about" smooth={true} duration={500} offset={100}>
                Sobre mi
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
              <Link to="experience" smooth={true} duration={500} offset={100}>
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
              <Link to="projects" smooth={true} duration={500} offset={100}>
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
              <Link to="connect" smooth={true} duration={500} offset={100}>
                Conectar
              </Link>
            </Button>
          </HStack>
        </Flex>
      </Container>
      <Flex
        w="100%"
        justifyContent="space-between"
        display={{ base: "flex", md: "none" }}
        alignItems="center"
      >
        <Link to="header" smooth={true} duration={500} offset={-100}>
          <Text className="name" fontSize="32" cursor="pointer">
            Juan Urani
          </Text>
        </Link>
        {isOpen ? (
          <Image src={CloseMenu.src} w="7" onClick={onClose} />
        ) : (
          <Image src={OpenMenu.src} w="6" onClick={onOpen} />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          w="100%"
          textAlign="center"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={onClose}
          >
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="600"
              h="4rem"
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
            </Text>
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={onClose}
          >
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="600"
              h="4rem"
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
              Experiencia
            </Text>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={onClose}
          >
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="600"
              h="4rem"
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
              Proyectos
            </Text>
          </Link>
          <Link
            to="connect"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={onClose}
          >
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="600"
              h="4rem"
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
              Connect
            </Text>
          </Link>
        </Flex>
      </Collapse>
    </Container>
  );
}
