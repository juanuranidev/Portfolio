import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import AnimatedComponent from "../components/animatedComponent/AnimatedComponent";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Project from "../components/project/Project";
import styles from "../styles/Home.module.css";
import Project1 from "../assets/images/Project1.png";
import Projects from "../views/projects/Projects";

export default function Home() {
  return (
    <Container maxW="full">
      <Head>
        <title>Juan Urani Portfolio</title>
        <meta name="description" content="Juan Urani Portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <AnimatedComponent>
        <Header />
      </AnimatedComponent>
      <Projects />
    </Container>
  );
}
