import React from "react";
import { Container, Heading, Img, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Animation from "../../components/animation/Animation";

export default function Skills() {
  const MotionFlex = motion(Flex);

  const icons = [
    {
      name: "JavaSript",
      link: "https://skillicons.dev/icons?i=javascript",
    },
    {
      name: "TypeScript",
      link: "https://skillicons.dev/icons?i=typescript",
    },
    {
      name: "React.js",
      link: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "Next.js",
      link: "https://skillicons.dev/icons?i=next",
    },
    {
      name: "Netlify",
      link: "https://skillicons.dev/icons?i=netlify",
    },
    {
      name: "Vercel",
      link: "https://skillicons.dev/icons?i=vercel",
    },
    {
      name: "CSS",
      link: "https://skillicons.dev/icons?i=css",
    },
    {
      name: "SASS",
      link: "https://skillicons.dev/icons?i=sass",
    },
    {
      name: "Chakra-UI",
      link: "https://skillicons.dev/icons?i=fastapi",
    },
    {
      name: "Bootstrap",
      link: "https://skillicons.dev/icons?i=bootstrap",
    },
    {
      name: "MongoDB",
      link: "https://skillicons.dev/icons?i=mongo",
    },
    {
      name: "Firebase",
      link: "https://skillicons.dev/icons?i=firebase",
    },
    {
      name: "GitHub",
      link: "https://skillicons.dev/icons?i=github",
    },
    {
      name: "GitLab",
      link: "https://skillicons.dev/icons?i=gitlab",
    },
    {
      name: "Git",
      link: "https://skillicons.dev/icons?i=git",
    },
  ];

  return (
    <Container
      mb="40"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading mb="40">HABILIDADES</Heading>
      <Flex justifyContent="center" wrap="wrap">
        {icons.map((icon, index) => (
          <Animation key={index}>
            <MotionFlex
              p="3"
              mb="5"
              mx="5"
              shadow="sm"
              fontWeight="700"
              borderRadius="md"
              alignItems="center"
              css={{
                animation: "change-border-color 3s infinite",
                border: "2px solid",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              exit={{
                scale: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                },
              }}
            >
              <Img src={icon.link} w="10" />
              <Text ml="2">{icon.name}</Text>
            </MotionFlex>
          </Animation>
        ))}
      </Flex>
    </Container>
  );
}
