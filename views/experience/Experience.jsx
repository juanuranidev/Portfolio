import React from "react";
import { Container, Heading, Img, Flex, Text, VStack } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";

export default function Experience() {
  return (
    <Container
      my="40"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Heading mb="40">EXPERIENCIA</Heading>
      <Animation>
        <VStack mb="40">
          <Text fontSize="lg" fontWeight="600" opacity="0.6">
            Diciembre 2021
          </Text>
          <Text fontSize="4xl" fontWeight="600">
            Mi primer commit
          </Text>
          <Text fontSize="md" fontWeight="500">
            El 29 de diciembre de 2021 inicié mi trayectoria para convertirme en
            un ingeniero de software con una sólida determinación y un fuerte
            compromiso para desarrollar aplicaciones que impacten positivamente
            la calidad de vida de las personas.
          </Text>
        </VStack>
      </Animation>
      <Animation>
        <VStack>
          <Text fontSize="lg" fontWeight="600" opacity="0.6">
            Abril 2022 - Actualidad
          </Text>
          <Text fontSize="4xl" fontWeight="600">
            Frontend Develper en Ait Solutions
          </Text>
          <Text fontSize="md" fontWeight="500">
            Trabajando en Boxer Gestión y Duck Gestión, sistemas de gestión que
            permiten a las empresas agilizar sus procesos de trabajo,
            administrar su inventario y facturar lo necesario para cumplir con
            las obligaciones tributarias. Aportando ideas para hacer crecer los
            productos y haciéndolas realidad con los conocimientos técnicos
            necesarios.
          </Text>
        </VStack>
      </Animation>
    </Container>
  );
}
