import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Yasmins Portfolio</title>
        <meta name="description" content="Yasmins Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/y.png" />
      </Head>
      <div>
        <section className="gradient-bg">
          <div
            data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675bde"
            className="bg-circle _1"
          ></div>
          <div
            data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675bdf"
            className="bg-circle _2"
          ></div>
          <div
            data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675be0"
            className="bg-circle _3"
          ></div>
          <div
            data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675be1"
            className="bg-circle _4"
          ></div>
          <div
            data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675be2"
            className="bg-circle _5"
          ></div>
          <div
            data-w-id="4cd1b5f2-9d79-0946-28b2-89b46f675be3"
            className="bg-circle _6"
          ></div>
        </section>
        <Hero />
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <About />
          <Skills />
        </div>
        <Projects />
        <Contact />
      </div>
    </>
  );
}
