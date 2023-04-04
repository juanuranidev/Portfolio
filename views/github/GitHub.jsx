import React from "react";
import { Container, Heading, Img, Flex, Text } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";
import Noodles from "../../assets/icons/Noodles.png";
import Image from "next/image";

export default function GitHub() {
  return (
    <Container
      mt="40"
      display="flex"
      maxW="container.xl"
      alignItems="center"
      flexDirection="column"
    >
      <Image
        width="48"
        height="48"
        alt="fideos"
        loading="lazy"
        src={Noodles.src}
      />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
        GITHUB
      </Heading>
      <Flex mb="10" flexDirection={{ base: "column", md: "row" }}>
        <Animation>
          <Img
            mr={{ base: "0", md: "10" }}
            mb={{ base: "10", md: "0" }}
            w={{ base: "100%", md: "20rem", lg: "30rem" }}
            src="https://github-readme-stats.vercel.app/api?username=juanuranidev&&show_icons=true&theme=dark&text_color=ffffff&count_private=true&include_all_commits=true&locale=en"
          />
        </Animation>
        <Animation>
          <Img
            w={{ base: "100%", md: "15.2rem", lg: "22.9rem" }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=juanuranidev&layout=compact&theme=dark&text_color=ffffff&locale=es"
          />
        </Animation>
      </Flex>
      <Animation>
        <Img
          src="http://ghchart.rshah.org/juanuranidev"
          w={{ base: "100%", md: "40rem", lg: "50rem" }}
        />
        <Text fontWeight="700">Commits 2022 - 2023</Text>
      </Animation>
    </Container>
  );
}
