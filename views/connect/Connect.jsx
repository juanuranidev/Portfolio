import React from "react";
import { Container, Heading, Img, Flex, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { connectIcons } from "../../helpers/util";
import { motion } from "framer-motion";
import Image from "next/image";
import Cheesecake from "../../assets/icons/Cheesecake.png";
import EnlaceExterno from "../../assets/icons/EnlaceExterno.svg";

export default function Connect() {
  const MotionFlex = motion(Flex);
  const {t: translate} = useTranslation()

  return (
    <Container
      mt="40"
      id="connect"
      display="flex"
      alignItems="center"
      maxW="container.xl"
      flexDirection="column"
    >
      <Image
        width="48"
        height="48"
        loading="lazy"
        alt="cheescake"
        src={Cheesecake.src}
      />
      <Heading mb={{ base: "10", md: "20" }} mt="40">
      {translate("sections.connect.title")}
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
                border: "2px solid",
                animation: "change-border-color 3s infinite",
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
      <Text fontWeight="700" mt="-4">
      {translate("sections.connect.freelance")}
      </Text>
    </Container>
  );
}
