import React, { useContext } from "react";
import {
  Flex,
  Text,
  Image,
  HStack,
  Button,
  Select,
  Collapse,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { navbarTranslations } from "../../util/translations";
import { LanguageContext } from "../../context/LanguageContext";
import { translate } from "../../util/translate";
import { Link } from "react-scroll";
import CloseMenu from "../../assets/icons/CloseMenu.png";
import OpenMenu from "../../assets/icons/OpenMenu.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Container
      m="0"
      px="6"
      py="3"
      top="0"
      w="100%"
      zIndex="10"
      shadow="md"
      bg="#ffffff"
      display="flex"
      position="sticky"
      maxW="container.full"
      pb={isOpen ? "0" : "3"}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Container
        p="0"
        w="100%"
        borderRadius="md"
        maxW="container.xl"
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Flex justifyContent="space-between" w="100%">
          <Link to="header" offset={-100} smooth={true} duration={500}>
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
              <Link to="about" offset={100} smooth={true} duration={500}>
                {translate(navbarTranslations, language, "about")}
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
              <Link offset={100} smooth={true} duration={500} to="experience">
                {translate(navbarTranslations, language, "experience")}
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
              <Link offset={100} smooth={true} duration={500} to="projects">
                {translate(navbarTranslations, language, "projects")}
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
              <Link offset={100} to="connect" smooth={true} duration={500}>
                {translate(navbarTranslations, language, "connect")}
              </Link>
            </Button>
            <Select w="15" onChange={(e) => setLanguage(e.target.value)}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </Select>
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
          w="100%"
          textAlign="center"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Link
            to="about"
            offset={-200}
            smooth={true}
            duration={500}
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
              {translate(navbarTranslations, language, "about")}
            </Text>
          </Link>
          <Link
            offset={-200}
            smooth={true}
            duration={500}
            to="experience"
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
              {translate(navbarTranslations, language, "experience")}
            </Text>
          </Link>
          <Link
            offset={-200}
            smooth={true}
            to="projects"
            duration={500}
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
              {translate(navbarTranslations, language, "projects")}
            </Text>
          </Link>
          <Link
            offset={-150}
            to="connect"
            smooth={true}
            duration={500}
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
              {translate(navbarTranslations, language, "connect")}
            </Text>
          </Link>
          <Select
            pb="5"
            display="flex"
            alignItems="center"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </Select>
        </Flex>
      </Collapse>
    </Container>
  );
}
