import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import AnimatedComponent from "../../components/animatedComponent/AnimatedComponent";
import Project1 from "../../assets/images/Project1.png";
import Project2 from "../../assets/images/Project2.png";
import Project from "../../components/project/Project";

export default function Projects() {
  return (
    <Container
      my="20"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading mb="20">PROYECTOS</Heading>
      <AnimatedComponent>
        <Project
          title="Frères"
          description="Frères es una tienda online que vende ropa que siempre me ha gustado, pensé que podría tener un mejor diseño así que me propuse crearlo."
          technologies={["React.js", "TypeScript", "SASS", "Firebase"]}
          image={Project1.src}
          repository={"https://github.com/juanuranidev/Freres"}
          website={"https://freres.netlify.app/"}
        />
      </AnimatedComponent>
      <AnimatedComponent>
        <Project
          title="Entrenally"
          description="Aplicación de autogestión para ayudar a entrenadores a realizar las tareas relacionadas a su trabajo en un solo lugar."
          technologies={["Next.js", "JavaScript", "Chakra-ui"]}
          image={Project2.src}
          repository={""}
          website={"https://entrenally.vercel.app/"}
          hasRightImage
        />
      </AnimatedComponent>
    </Container>
  );
}
