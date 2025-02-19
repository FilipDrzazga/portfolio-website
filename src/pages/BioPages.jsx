import Navbar from "../components/ui/Navbar";
import Bio from "../components/sections/bio/Hero";
import AboutMe from "../components/sections/bio/AboutMe";
import Contact from "../components/sections/bio/Contact";

const BioPages = () => {
  return (
    <>
      <Navbar />
      <Bio />
      <AboutMe />
      <Contact />
    </>
  );
};

export default BioPages;
