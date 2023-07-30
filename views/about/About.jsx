import React from "react";
import { Img, Text, Flex, Heading, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ProfilePicture from "../../assets/images/ProfilePicture.jpg";
import ChineseNoodles from "../../assets/icons/ChineseNoodles.png";
import Animation from "../../components/animation/Animation";
import Image from "next/image";

export default function About() {
  const {t: translate} = useTranslation()

  return (
    <Container
      mt="40"
      id="about"
      display="flex"
      maxW="container.xl"
      alignItems="center"
      flexDirection="column"
    >
      <Image
        width="48"
        height="48"
        loading="lazy"
        alt="fideos chinos"
        src={ChineseNoodles.src}
      />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
      {translate("sections.about.title")}
      </Heading>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex
          mr={{ base: "0", lg: "10" }}
          mb={{ base: "10", lg: "0" }}
          w={{ base: "100%", lg: "20rem" }}
        >
          <Animation>
            <Img src={ProfilePicture.src} shadow="md" borderRadius="lg" />
          </Animation>
        </Flex>
        <Flex
          flexDirection="column"
          w={{ base: "100%", lg: "30rem" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "justify", lg: "justify" }}
        >
          <Animation>
            <Text fontSize="4xl" fontWeight="700" mb="2">
              Juan Urani
            </Text>
          </Animation>
          <Animation>
            <Text mb="5" fontSize="md">
            {translate("sections.about.firstDescription")}
            </Text>
          </Animation>
          <Animation>
            <Text mb="10" fontSize="md">
            {translate("sections.about.secondDescription")}
            </Text>
          </Animation>
        </Flex>
      </Flex>
    </Container>
  );
}
