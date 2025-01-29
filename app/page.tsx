import Hero from "../components/ui/Hero";
import About from "../components/ui/About";
import Experience from "../components/ui/Experience";
import Skills from "../components/ui/Skills";
import Cases from "../components/ui/Cases";
import Contact from "../components/ui/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <main className="space-y-12">
        <About />
        <Experience />
        <Skills />
        <Cases />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
