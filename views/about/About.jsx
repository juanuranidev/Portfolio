import React from "react";
import {
  Img,
  Text,
  Flex,
  Link,
  Button,
  Heading,
  Container,
  ButtonGroup,
} from "@chakra-ui/react";
import ProfilePicture from "../../assets/images/ProfilePicture.jpg";
import ChineseNoodles from "../../assets/icons/ChineseNoodles.png";
import Animation from "../../components/animation/Animation";
import Image from "next/image";

export default function About() {
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
        SOBRE MI
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
              Con más de un año de experiencia escribiendo código me considero
              una persona proactiva, con muchas ansias de seguir aprendiendo y
              adentrándome en esta hermosa industria.
            </Text>
          </Animation>
          <Animation>
            <Text mb="10" fontSize="md">
              Con muchas ganas de trabajar en proyectos innovadores junto a un
              excelente equipo, así como también desarrollar mi perfil de "Indie
              Hacker" y construir aplicaciones que mejoren la vida de las
              personas mientras construyo un negocio en base a ellas.
            </Text>
          </Animation>
          <ButtonGroup spacing="5">
            <Animation>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/juanurani/"
              >
                <Button
                  shadow="sm"
                  variant="outline"
                  colorScheme="linkedin"
                  w={{ base: "100%", md: "8rem", lg: "9.2rem" }}
                >
                  LinkedIn
                </Button>
              </Link>
            </Animation>
            <Animation>
              <Link href="https://github.com/juanuranidev" target="_blank">
                <Button
                  shadow="sm"
                  variant="outline"
                  colorScheme="linkedin"
                  w={{ base: "100%", md: "8rem", lg: "9.2rem" }}
                >
                  GitHub
                </Button>
              </Link>
            </Animation>
            <Animation>
              <Link href="mailto:juanignaciouranimm@gmail.com" target="_blank">
                <Button
                  shadow="sm"
                  variant="outline"
                  colorScheme="linkedin"
                  w={{ base: "100%", md: "8rem", lg: "9.2rem" }}
                >
                  Email
                </Button>
              </Link>
            </Animation>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Container>
  );
}
