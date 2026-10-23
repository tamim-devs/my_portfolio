import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Banner/> 
    <About/>
    <Skills/>
    <Projects/> 
    <Contact/>
    </>
  );
}
