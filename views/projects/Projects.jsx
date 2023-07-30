import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Animation from "../../components/animation/Animation";
import Project1 from "../../assets/images/Project1.png";
import Project2 from "../../assets/images/Project2.png";
import Project from "../../components/project/Project";
import Cherry from "../../assets/icons/Cherry.png";
import Image from "next/image";

export default function Projects() {
  const {t: translate} = useTranslation()

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
      {translate("sections.projects.title")}
      </Heading>
      <Animation>
        <Project
          title="Frères"
          image={Project1.src}
          website={"https://freres.netlify.app/"}
          repository={"https://github.com/juanuranidev/Freres"}
          technologies={["React.js", "TypeScript", "SASS", "Firebase"]}
          description={translate("sections.projects.firstProjectDescription")}
        />
      </Animation>
      <Animation>
        <Project
          hasRightImage
          title="Demo Entrenaly"
          image={Project2.src}
          website={"https://demo-entrenaly.vercel.app/"}
          technologies={["Next.js", "JavaScript", "Chakra-ui"]}
          repository={"https://github.com/juanuranidev/DemoEntrenaly"}
          description={translate("sections.projects.secondProjectDescription")}
        />
      </Animation>
    </Container>
  );
}
