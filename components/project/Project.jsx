import React, { useContext } from "react";
import {
  Box,
  Link,
  Flex,
  Text,
  Image,
  Button,
  Tooltip,
  ButtonGroup,
} from "@chakra-ui/react";
import { projectTranslations } from "../../util/translations.js";
import { LanguageContext } from "../../context/LanguageContext";
import { translate } from "../../util/translate.js";

export default function Project({
  title,
  image,
  website,
  repository,
  description,
  technologies,
  hasRightImage,
}) {
  const { language } = useContext(LanguageContext);

  return (
    <Flex
      maxW="60rem"
      alignItems="center"
      justifyContent="space-between"
      mb={{ base: "20", md: "40" }}
      flexDirection={
        hasRightImage
          ? { base: "column", md: "row-reverse" }
          : { base: "column", md: "row" }
      }
    >
      <Flex
        h="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        mb={{ base: "5", md: "0" }}
        ml={hasRightImage ? { base: "0", md: "5" } : "0"}
        mr={hasRightImage ? "0" : { base: "0", md: "5" }}
      >
        <Box
          p="1"
          w={{ base: "100%", md: "16rem", lg: "22rem" }}
          borderRadius="md"
          bg="linear-gradient(to bottom, rgba(170, 119, 255, 0.6), rgba(98, 205, 255, 0.6))"
        >
          <Image src={image} borderRadius="md" m="auto" />
        </Box>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="space-between"
        justifyContent="space-between"
      >
        <Flex
          flexDirection="column"
          mb={{ base: "5", md: "0" }}
          textAlign={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Text fontSize="4xl" fontWeight="600">
            {title}
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="400" mb="5">
            {description}
          </Text>
          <Flex
            flexWrap="wrap"
            spacing="2"
            justifyContent={{ base: "center" }}
            mb="5"
          >
            {technologies.map((technology, index) => (
              <Text
                p="2"
                mr="2"
                mb="2"
                key={index}
                shadow="sm"
                bg="#e0e0e0"
                display="flex"
                fontWeight="700"
                borderRadius="md"
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                w={{ base: "6rem", md: "6.5rem" }}
                fontSize={{ base: "0.8rem", md: "sm" }}
              >
                {technology}
              </Text>
            ))}
          </Flex>
        </Flex>
        <ButtonGroup
          spacing="5"
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Button
            variant="outline"
            css={{
              animation: "change-border-color 3s infinite",
              border: "2px solid",
            }}
            _hover={{
              bg: "#ffffff",
              cursor: repository ? "pointer" : "auto",
            }}
            _active={{
              bg: "#ffffff",
            }}
            opacity={repository ? "1" : "0.5"}
          >
            {repository ? (
              <Link
                href={repository}
                target="_blank"
                cursor={repository ? "pointer" : "default"}
                _hover={{
                  textDecoration: repository ? "underline" : "none",
                }}
              >
                {translate(projectTranslations, language, "repository")}
              </Link>
            ) : (
              <Tooltip label="El repositorio es privado de momento">
                <Link
                  href={null}
                  cursor="default"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  {translate(projectTranslations, language, "repository")}
                </Link>
              </Tooltip>
            )}
          </Button>
          <Button variant="link" color="#000000">
            <Link href={website} target="_blank">
              {translate(projectTranslations, language, "website")}
            </Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
