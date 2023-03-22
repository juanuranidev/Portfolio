import React from "react";
import { Container, Heading, Img } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";
import Project1 from "../../assets/images/Project1.png";
import Project2 from "../../assets/images/Project2.png";
import Project from "../../components/project/Project";
import Cereza from "../../assets/icons/Cereza.png";

export default function Projects() {
  return (
    <Container
      mt="40"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      id="projects"
    >
      <Img src={Cereza.src} w="12" />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
        PROYECTOS
      </Heading>
      <Animation>
        <Project
          title="Frères"
          description="Frères es una marca de ropa existente cuyos productos siempre me han gustado, pensé que su página web podía tener un mejor diseño así que me propuse a mejorarla."
          technologies={["React.js", "TypeScript", "SASS", "Firebase"]}
          image={Project1.src}
          repository={"https://github.com/juanuranidev/Freres"}
          website={"https://freres.netlify.app/"}
        />
      </Animation>
      <Animation>
        <Project
          title="Entrenally"
          description="Entrenally es una aplicación de autogestión para ayudar a entrenadores a realizar las tareas relacionadas a su trabajo en un solo lugar y de manera sencilla."
          technologies={["Next.js", "JavaScript", "Chakra-ui"]}
          image={Project2.src}
          repository={""}
          website={"https://entrenally.vercel.app/"}
          hasRightImage
        />
      </Animation>
    </Container>
  );
}
