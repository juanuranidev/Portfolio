import React from "react";
import { Flex, Image, Box, VStack, Text } from "@chakra-ui/react";
import Project1 from "../../assets/images/Project1.png";

export default function Project() {
  return (
    <Flex maxW="50rem">
      <Box w="96" mr="5">
        <Image src={Project1.src} />
      </Box>
      <VStack alignItems="flex-start">
        <Text fontSize="lg" fontWeight="600">
          Frères
        </Text>
        <Text fontSize="md" fontWeight="400">
          Frères es una tienda online que vende ropa que siempre me ha gustado,
          pensé que podría tener un mejor diseño así que me propuse crearlo.
        </Text>
        <Text fontSize="md" fontWeight="600">
          Hecho con:
        </Text>
      </VStack>
    </Flex>
  );
}
