import React from "react";
import {
  Flex,
  Image,
  Box,
  VStack,
  Text,
  HStack,
  Button,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";

export default function Project({
  title,
  image,
  description,
  hasRightImage,
  technologies,
  repository,
  website,
}) {
  return (
    <Flex
      maxW="60rem"
      alignItems="space-between"
      justifyContent="space-between"
      mb="40"
      flexDirection={
        hasRightImage
          ? { base: "column", md: "row-reverse" }
          : { base: "column", md: "row" }
      }
    >
      <Box
        // w="96"
        mr={hasRightImage ? "0" : { base: "0", md: "5" }}
        ml={hasRightImage ? { base: "0", md: "5" } : "0"}
        mb={{ base: "5", md: "0" }}
        p="1"
        bg="linear-gradient(to bottom, rgba(170, 119, 255, 0.6), rgba(98, 205, 255, 0.6))"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
      >
        <Image src={image} borderRadius="md" />
      </Box>
      <Flex
        flexDirection="column"
        alignItems="space-between"
        justifyContent="space-between"
      >
        <VStack alignItems="flex-start" mb={{ base: "5", md: "0" }}>
          <Text fontSize="5xl" fontWeight="600">
            {title}
          </Text>
          <Text fontSize="lg" fontWeight="400" mb="5">
            {description}
          </Text>
        </VStack>
        <VStack alignItems="flex-start" mb={{ base: "5", md: "0" }}>
          <Text fontSize="md" fontWeight="600">
            Hecho con:
          </Text>
          <HStack mb="5">
            {technologies.map((technology) => (
              <Text
                p="2"
                px="5"
                shadow="sm"
                bg="#e0e0e0"
                fontSize="sm"
                display="flex"
                fontWeight="500"
                borderRadius="md"
                alignItems="center"
              >
                {technology}
              </Text>
            ))}
          </HStack>
        </VStack>
        <ButtonGroup
          pt="4"
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
            <Link
              href={repository ? repository : null}
              target="_blank"
              cursor={repository ? "pointer" : "default"}
              _hover={{
                textDecoration: repository ? "underline" : "none",
              }}
            >
              Repositorio
            </Link>
          </Button>
          <Button
            variant="link"
            // _hover={{
            //   background: "linear-gradient(to bottom, #aa77ff, #62cdff)",
            //   backgroundClip: "text",
            //   color: "transparent",
            // }}
            color="#000000"
          >
            <Link href={website} target="_blank">
              Página Web
            </Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
