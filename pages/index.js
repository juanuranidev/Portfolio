import { Container } from "@chakra-ui/react";
import Experience from "../views/experience/Experience";
import Projects from "../views/projects/Projects";
import Navbar from "../components/navbar/Navbar";
import Header from "../views/header/Header";
import GitHub from "../views/github/GitHub";
import Skills from "../views/skills/Skills";
import About from "../views/about/About";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxW="full">
      <Head>
        <title>Juan Urani - Portfolio</title>
        <meta name="description" content="Juan Urani - Portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <GitHub />
    </Container>
  );
}
