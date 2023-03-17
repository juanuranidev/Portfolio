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
      flexDirection={hasRightImage ? "row-reverse" : "row"}
    >
      <Box
        // w="96"
        mr={hasRightImage ? "0" : "5"}
        ml={hasRightImage ? "5" : "0"}
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
        <VStack alignItems="flex-start">
          <Text fontSize="5xl" fontWeight="600">
            {title}
          </Text>
          <Text fontSize="lg" fontWeight="400" mb="5">
            {description}
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Text fontSize="md" fontWeight="600">
            Hecho con:
          </Text>
          <HStack mb="5">
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
              React.js
            </Text>
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
              TypeScript
            </Text>
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
              SASS
            </Text>
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
              Firebase
            </Text>
          </HStack>
        </VStack>
        <ButtonGroup pt="4" spacing="5">
          <Button
            variant="outline"
            css={{
              animation: "change-border-color 3s infinite",
              border: "2px solid",
            }}
            // _hover={{
            //   bg: "linear-gradient(to bottom, rgba(170, 119, 255, 0.1), rgba(98, 205, 255, 0.1))",
            // }}
            // _active={{
            //   bg: "linear-gradient(to bottom, rgba(170, 119, 255, 0.2), rgba(98, 205, 255, 0.2))",
            // }}
            _hover={{
              bg: "#ffffff",
            }}
            _active={{
              bg: "#ffffff",
            }}
          >
            Repositorio
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
            Página Web
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
