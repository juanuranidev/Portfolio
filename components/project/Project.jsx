import React from "react";
import {
  Box,
  Link,
  Flex,
  Text,
  Image,
  Button,
  ButtonGroup,
  Tooltip,
} from "@chakra-ui/react";

export default function Project({
  title,
  image,
  website,
  repository,
  description,
  technologies,
  hasRightImage,
}) {
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
        flexDirection="column"
        h="100%"
        mr={hasRightImage ? "0" : { base: "0", md: "5" }}
        ml={hasRightImage ? { base: "0", md: "5" } : "0"}
        mb={{ base: "5", md: "0" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
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
          alignItems={{ base: "center", md: "flex-start" }}
          mb={{ base: "5", md: "0" }}
          textAlign={{ base: "center", md: "left" }}
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
                w={{ base: "6rem", md: "6.5rem" }}
                key={index}
                shadow="sm"
                display="flex"
                bg="#e0e0e0"
                fontSize={{ base: "0.8rem", md: "sm" }}
                fontWeight="700"
                borderRadius="md"
                textAlign="center"
                alignItems="center"
                justifyContent="center"
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
                Repositorio
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
                  Repositorio
                </Link>
              </Tooltip>
            )}
          </Button>
          <Button variant="link" color="#000000">
            <Link href={website} target="_blank">
              Página Web
            </Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
