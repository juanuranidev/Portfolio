import React from "react";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";
import Hamburger from "../../assets/icons/Hamburger.png";
import Image from "next/image";

export default function Experience() {
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
        EXPERIENCIA
      </Heading>
      <Animation>
        <VStack mb={{ base: "20", md: "40" }}>
          <Text
            opacity="0.6"
            fontWeight="600"
            fontSize={{ base: "md", md: "lg" }}
          >
            Diciembre 2021
          </Text>
          <Text
            fontWeight="600"
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          >
            Mi primer commit
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: "sm", md: "md" }}
            w={{ base: "100&", md: "45rem", lg: "60rem" }}
          >
            El 29 de diciembre de 2021 inicié mi trayectoria para convertirme en
            un ingeniero de software con una sólida determinación y un fuerte
            compromiso para desarrollar aplicaciones que impacten positivamente
            la calidad de vida de las personas.
          </Text>
        </VStack>
      </Animation>
      <Animation>
        <VStack mb={{ base: "20", md: "40" }}>
          <Text
            opacity="0.6"
            fontWeight="600"
            fontSize={{ base: "md", md: "lg" }}
          >
            Abril 2022 - Abril 2023
          </Text>
          <Text
            fontWeight="600"
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          >
            Frontend Develper en Ait Solutions
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: "sm", md: "md" }}
            w={{ base: "100&", md: "45rem", lg: "60rem" }}
          >
            Trabajando en Boxer Gestión y Duck Gestión, sistemas de gestión que
            permiten a las empresas agilizar sus procesos de trabajo,
            administrar su inventario y facturar lo necesario para cumplir con
            las obligaciones tributarias. Aportando ideas para hacer crecer los
            productos y haciéndolas realidad con los conocimientos técnicos
            necesarios.
          </Text>
        </VStack>
      </Animation>
      <Animation>
        <VStack>
          <Text
            opacity="0.6"
            fontWeight="600"
            fontSize={{ base: "md", md: "lg" }}
          >
            Abril 2023 - Actualidad
          </Text>
          <Text
            fontWeight="600"
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          >
            Full Stack Develper en Ait Solutions
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: "sm", md: "md" }}
            w={{ base: "100&", md: "45rem", lg: "60rem" }}
          >
            Trabajando en Boxer Gestión y Duck Gestión, aportando ideas para
            hacer crecer los productos y haciéndolas realidad con los
            conocimientos técnicos necesarios. Además, en el area de creación,
            logrando crear el próximo producto de la empresa a partir de la
            creación y prueba de distintos mvp's.
          </Text>
        </VStack>
      </Animation>
    </Container>
  );
}
