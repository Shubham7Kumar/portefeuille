
import About from "../components/home/About/About";
import Contact from "../components/home/Contact/Contact";
import Hero from "../components/home/Hero/Hero";
import Projects from "../components/home/Projects/projects";
import Skills from "../components/home/Skills/Skills";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </MainLayout>
  );
};

export default Home;