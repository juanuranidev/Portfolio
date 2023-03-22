import { Container } from "@chakra-ui/react";
import Experience from "../views/experience/Experience";
import Projects from "../views/projects/Projects";
import Connect from "../views/connect/Connect";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Header from "../views/header/Header";
import GitHub from "../views/github/GitHub";
import Skills from "../views/skills/Skills";
import About from "../views/about/About";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxW="full" p="0">
      <Head>
        <title>Juan Urani - Portfolio</title>
        <meta name="description" content="Juan Urani - Portfolio" />
        <link
          rel="icon"
          href="https://img.icons8.com/3d-fluency/94/null/mouse--v2.png"
        />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <GitHub />
      <Connect />
      <Footer />
    </Container>
  );
}
