import React, { useContext } from "react";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { experienceTranslations } from "../../util/translations";
import { LanguageContext } from "../../context/LanguageContext";
import { translate } from "../../util/translate";
import Animation from "../../components/animation/Animation";
import Hamburger from "../../assets/icons/Hamburger.png";
import Image from "next/image";

export default function Experience() {
  const { language } = useContext(LanguageContext);

  return (
    <Container
      mt="40"
      display="flex"
      id="experience"
      maxW="container.xl"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
    >
      <Image
        width="48"
        height="48"
        loading="lazy"
        alt="hamburguesa"
        src={Hamburger.src}
      />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
        {translate(experienceTranslations, language, "title")}
      </Heading>
      {translate(experienceTranslations, language, "experiencia").map(
        (experience, index) => (
          <Animation key={index}>
            <VStack mb={index === 2 ? "0" : { base: "20", md: "40" }}>
              <Text
                opacity="0.6"
                fontWeight="600"
                fontSize={{ base: "md", md: "lg" }}
              >
                {experience.date}
              </Text>
              <Text
                fontWeight="600"
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
              >
                {experience.title}
              </Text>
              <Text
                fontWeight="500"
                fontSize={{ base: "sm", md: "md" }}
                w={{ base: "100&", md: "45rem", lg: "60rem" }}
              >
                {experience.description}
              </Text>
            </VStack>
          </Animation>
        )
      )}
    </Container>
  );
}
