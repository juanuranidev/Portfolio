import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Animation from "../../components/animation/Animation";

export default function Header() {
  const {t: translate} = useTranslation()

  return (
    <Container
      py="40"
      id="header"
      display="flex"
      borderRadius="md"
      textAlign="center"
      alignItems="center"
      maxW="container.xl"
      flexDirection="column"
    >
      <Animation>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} fontWeight="600">
          {translate("sections.header.title")}
        </Text>
        <Text
          fontWeight="700"
          css={{
            color: "#3792e4",
            backgroundColor: "#fff",
            animation: "change-color 3s infinite",
          }}
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
        >
          Juan Urani
        </Text>
        <Text
          fontWeight="700"
          css={{
            color: "#3792e4",
            backgroundColor: "#fff",
            animation: "change-color 3s infinite",
          }}
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
        >
         {translate("sections.header.subtitle")}
        </Text>
        <Text
          w="100%"
          fontWeight="700"
          textAlign="right"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
        >
         {translate("sections.header.paragraph")}
        </Text>
      </Animation>
    </Container>
  );
}
