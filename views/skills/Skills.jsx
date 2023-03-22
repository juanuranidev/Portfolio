import React from "react";
import { Container, Heading, Img, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { skillsIcons } from "../../helpers/util";
import Animation from "../../components/animation/Animation";
import Sandia from "../../assets/icons/Sandia.png";

export default function Skills() {
  const MotionFlex = motion(Flex);

  return (
    <Container
      mt={{ base: "20", md: "0" }}
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Img src={Sandia.src} w="12" />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
        HABILIDADES
      </Heading>
      <Flex justifyContent="center" wrap="wrap">
        {skillsIcons.map((icon, index) => (
          <Animation key={index}>
            <MotionFlex
              p="3"
              mb={{ base: "2", md: "5" }}
              mx={{ base: "2", md: "5" }}
              shadow="sm"
              fontWeight="700"
              borderRadius="md"
              alignItems="center"
              css={{
                animation: "change-border-color 3s infinite",
                border: "2px solid",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              exit={{
                scale: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                },
              }}
            >
              <Img src={icon.link} w={{ base: "5", md: "10" }} />
              <Text ml="2" fontSize={{ base: "sm", md: "md" }}>
                {icon.name}
              </Text>
            </MotionFlex>
          </Animation>
        ))}
      </Flex>
    </Container>
  );
}
