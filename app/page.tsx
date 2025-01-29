import About from "../components/ui/About";
import Experience from "../components/ui/Experience";
import Skills from "../components/ui/Skills";
import Cases from "../components/ui/Cases";
import Contact from "../components/ui/Contact";
import Main from "../components/ui/Main";

const Home = () => {
  return (
    <div>
      <Main />
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
