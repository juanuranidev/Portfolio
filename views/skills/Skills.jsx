import React from "react";
import { Container, Heading, Img, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { skillsIcons } from "../../helpers/util";
import { motion } from "framer-motion";
import Watermelon from "../../assets/icons/Watermelon.png";
import Animation from "../../components/animation/Animation";
import Image from "next/image";

export default function Skills() {
  const MotionFlex = motion(Flex);
  const {t: translate} = useTranslation()

  return (
    <Container
      display="flex"
      alignItems="center"
      flexDirection="column"
      maxW="container.xl"
      mt={{ base: "20", md: "0" }}
    >
      <Image
        width="48"
        height="48"
        alt="melón"
        loading="lazy"
        src={Watermelon.src}
      />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
      {translate("sections.skills.title")}
      </Heading>
      <Flex justifyContent="center" wrap="wrap">
        {skillsIcons.map((icon, index) => (
          <Animation key={index}>
            <MotionFlex
              p="3"
              shadow="sm"
              fontWeight="700"
              borderRadius="md"
              alignItems="center"
              mb={{ base: "2", md: "5" }}
              mx={{ base: "2", md: "5" }}
              whileHover={{ scale: 1.05 }}
              exit={{
                scale: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                },
              }}
              css={{
                animation: "change-border-color 3s infinite",
                border: "2px solid",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
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
