import React from "react";
import {
  Avatar,
  Container,
  Heading,
  Img,
  Text,
  VStack,
  Flex,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/react";
import ProfilePicture from "../../assets/images/ProfilePicture.jpg";
import Animation from "../../components/animation/Animation";

export default function About() {
  return (
    <Container
      mt="40"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      id="about"
    >
      <Heading mb="40">SOMBRE MI</Heading>
      <Flex>
        <Img src={ProfilePicture.src} borderRadius="lg" w="40%" mr="20" />
        <Flex flexDirection="column" w="60%" alignItems="flex-start">
          <Animation>
            <Text fontSize="4xl" fontWeight="700" mb="2">
              Juan Urani
            </Text>
          </Animation>
          <Animation>
            <Text mb="5">
              Con 1 año y trés meses de experiencia escribiendo código me
              considero una persona proactiva y con muchas ansias de seguir
              aprendiendo y adentrarme en esta hermosa industria.
            </Text>
          </Animation>
          <Animation>
            <Text mb="5">
              Apasionado tanto por trabajar en proyectos innovadores que
              incluyan un excelente equipo, así como también sacar mi "Indie
              Hacker" dentro mío y construir aplicaciones que cambien la vida de
              las personas mientras construyo un negocio en base a ellas.
            </Text>
          </Animation>
          <ButtonGroup spacing="5">
            <Animation>
              <Button variant="outline" colorScheme="linkedin">
                <Link
                  href="https://www.linkedin.com/in/juanurani/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </Button>
            </Animation>
            <Animation>
              <Button variant="outline" colorScheme="linkedin">
                <Link href="https://github.com/juanuranidev" target="_blank">
                  GitHub
                </Link>
              </Button>
            </Animation>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Container>
  );
}
