import React from "react";
import { Container, Heading, Img, Flex, Text } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";

export default function GitHub() {
  return (
    <Container
      my="40"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading mb="40">GITHUB</Heading>
      <Flex mb="10">
        <Animation>
          <Img
            src="https://github-readme-stats.vercel.app/api?username=juanuranidev&&show_icons=true&theme=dark&text_color=ffffff&count_private=true&include_all_commits=true&locale=en"
            mr="10"
            w="30rem"
          />
        </Animation>
        <Animation>
          <Img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=juanuranidev&layout=compact&theme=dark&text_color=ffffff&locale=es"
            w="22.9rem"
          />
        </Animation>
      </Flex>
      <Animation>
        <Img src="http://ghchart.rshah.org/juanuranidev" w="50rem" />
        <Text fontWeight="700">Commits 2022 - 2023</Text>
      </Animation>
    </Container>
  );
}
