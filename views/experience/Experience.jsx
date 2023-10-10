import React from "react";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Animation from "../../components/animation/Animation";
import Hamburger from "../../assets/icons/Hamburger.png";
import Image from "next/image";

export default function Experience() {
  const { t: translate, i18n } = useTranslation();

  const experiences = [
    {
      date: translate("sections.experience.firstExperienceDate"),
      title: translate("sections.experience.firstExperienceTitle"),
      description: translate("sections.experience.firstExperienceDescription"),

      date: translate("sections.experience.firstExperienceDate"),
      title: translate("sections.experience.firstExperienceTitle"),
      description: translate("sections.experience.firstExperienceDescription"),
    },
    {
      date: translate("sections.experience.secondExperienceDate"),
      title: translate("sections.experience.secondExperienceTitle"),
      description: translate("sections.experience.secondExperienceDescription"),

      date: translate("sections.experience.secondExperienceDate"),
      title: translate("sections.experience.secondExperienceTitle"),
      description: translate("sections.experience.secondExperienceDescription"),
    },
    {
      date: translate("sections.experience.thirdExperienceDate"),
      title: translate("sections.experience.thirdExperienceTitle"),
      description: translate("sections.experience.thirdExperienceDescription"),

      date: translate("sections.experience.thirdExperienceDate"),
      title: translate("sections.experience.thirdExperienceTitle"),
      description: translate("sections.experience.thirdExperienceDescription"),
    },
  ];

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
        {translate("sections.experience.title")}
      </Heading>
      {experiences.map((experience, index) => (
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
      ))}
    </Container>
  );
}
