import React, { useContext } from "react";
import { projectsTranslations } from "../../util/translations";
import { Container, Heading } from "@chakra-ui/react";
import { LanguageContext } from "../../context/LanguageContext";
import { translate } from "../../util/translate";
import Animation from "../../components/animation/Animation";
import Project1 from "../../assets/images/Project1.png";
import Project2 from "../../assets/images/Project2.png";
import Project from "../../components/project/Project";
import Cherry from "../../assets/icons/Cherry.png";
import Image from "next/image";

export default function Projects() {
  const { language } = useContext(LanguageContext);

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
        {translate(projectsTranslations, language, "title")}
      </Heading>
      <Animation>
        <Project
          title="Frères"
          image={Project1.src}
          website={"https://freres.netlify.app/"}
          repository={"https://github.com/juanuranidev/Freres"}
          technologies={["React.js", "TypeScript", "SASS", "Firebase"]}
          description={translate(
            projectsTranslations,
            language,
            "firstProjectDescription"
          )}
        />
      </Animation>
      <Animation>
        <Project
          hasRightImage
          repository={"https://github.com/juanuranidev/DemoEntrenaly"}
          title="Demo Entrenaly"
          image={Project2.src}
          website={"https://demo-entrenaly.vercel.app/"}
          technologies={["Next.js", "JavaScript", "Chakra-ui"]}
          description={translate(
            projectsTranslations,
            language,
            "secondProjectDescription"
          )}
        />
      </Animation>
    </Container>
  );
}
