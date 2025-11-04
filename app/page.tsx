// import { useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Essays from "./sections/Essays";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
       <section id="projects">
        <Projects />
      </section>
      <section id="essays">
        <Essays />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
export default Home;