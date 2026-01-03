import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Background Animation */}
    <StarBackground />
    {/* Navigation Bar */}
    <Navbar />
    {/* Main Content Area */}
    <main>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
    </main>

    {/* Footer */}
    <Footer />
  </div>;
};
