import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio Marianne de Gooijer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portfolio Marianne de Gooijer - Front-end web developer uit Nederland | Ik werk graag aan de front-end van websites met bijvoorbeeld React. Neem een kijkje op mijn website voor meer informatie!"
        />
        <link rel="icon" href="/images/logo.webp" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        {/* <Component {...pageProps} /> */}
      </main>
    </>
  );
}
