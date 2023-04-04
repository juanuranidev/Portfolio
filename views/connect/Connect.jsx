import React from "react";
import { Container, Heading, Img, Flex, Text, Link } from "@chakra-ui/react";
import { connectIcons } from "../../helpers/util";
import { motion } from "framer-motion";
import Cheesecake from "../../assets/icons/Cheesecake.png";
import EnlaceExterno from "../../assets/icons/EnlaceExterno.svg";

export default function Connect() {
  const MotionFlex = motion(Flex);

  return (
    <Container
      mt="40"
      id="connect"
      display="flex"
      alignItems="center"
      maxW="container.xl"
      flexDirection="column"
    >
      <Img
        width="48"
        height="48"
        loading="lazy"
        alt="cheescake"
        src={Cheesecake.src}
      />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
        CONECTAR
      </Heading>
      <Flex
        w="100%"
        flexWrap="wrap"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        {connectIcons.map((connectIcon, index) => (
          <Link
            mb="5"
            key={index}
            target="_blank"
            href={connectIcon.link}
            mx={{ base: "0", md: "2.5" }}
            w={{ base: "100%", md: "45%" }}
            _hover={{ textDecoration: "none" }}
          >
            <MotionFlex
              p="3"
              borderRadius="md"
              alignItems="center"
              whileHover={{ scale: 1.05 }}
              justifyContent="space-between"
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              css={{
                animation: "change-border-color 3s infinite",
                border: "2px solid",
              }}
            >
              <Img
                mr="2"
                w="12"
                src={connectIcon.icon}
                alt={connectIcon.name}
              />
              <Text
                fontWeight="600"
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              >
                {connectIcon.name}
              </Text>
              <Img src={EnlaceExterno.src} alt="enlace externo" />
            </MotionFlex>
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
