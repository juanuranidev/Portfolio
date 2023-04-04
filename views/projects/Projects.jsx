import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";
import Project1 from "../../assets/images/Project1.png";
import Project2 from "../../assets/images/Project2.png";
import Project from "../../components/project/Project";
import Cherry from "../../assets/icons/Cherry.png";
import Image from "next/image";

export default function Projects() {
  return (
    <Container
      mt="40"
      id="projects"
      display="flex"
      alignItems="center"
      maxW="container.xl"
      flexDirection="column"
    >
      <Image
        width="48"
        height="48"
        alt="cereza"
        loading="lazy"
        src={Cherry.src}
      />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
        PROYECTOS
      </Heading>
      <Animation>
        <Project
          title="Frères"
          image={Project1.src}
          website={"https://freres.netlify.app/"}
          repository={"https://github.com/juanuranidev/Freres"}
          technologies={["React.js", "TypeScript", "SASS", "Firebase"]}
          description="Frères es una marca de ropa existente cuyos productos siempre me han gustado, pensé que su página web podía tener un mejor diseño así que me propuse a mejorarla."
        />
      </Animation>
      <Animation>
        <Project
          hasRightImage
          repository={""}
          title="Entrenally"
          image={Project2.src}
          website={"https://entrenally.vercel.app/"}
          technologies={["Next.js", "JavaScript", "Chakra-ui", "MongoDB"]}
          description="Entrenally es una aplicación de autogestión para ayudar a entrenadores a realizar todas las tareas relacionadas a su trabajo en un solo lugar y de manera sencilla."
        />
      </Animation>
    </Container>
  );
}
