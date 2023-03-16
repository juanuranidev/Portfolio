import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import AnimatedComponent from "../../components/animatedComponent/AnimatedComponent";
import Project1 from "../../assets/images/Project1.png";
import Project2 from "../../assets/images/Project2.png";
import Project from "../../components/project/Project";

export default function Projects() {
  return (
    <Container
      //   py="40"
      //   borderRadius="md"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <AnimatedComponent>
        <Heading mb="20">Proyectos</Heading>
      </AnimatedComponent>
      <AnimatedComponent>
        <Project
          title="Frères"
          description="Frères es una tienda online que vende ropa que siempre me ha gustado, pensé que podría tener un mejor diseño así que me propuse crearlo."
          technologies={[]}
          image={Project1.src}
          repository={""}
          website={""}
        />
      </AnimatedComponent>
      <AnimatedComponent>
        <Project
          title="Entrenally"
          description="Aplicación de autogestión con el objetivo de ayudar a los entrenadores a realizar todas las tareas relacionadas a su trabajo en un solo lugar."
          technologies={[]}
          image={Project2.src}
          repository={""}
          website={""}
          hasRightImage
        />
      </AnimatedComponent>
    </Container>
  );
}
