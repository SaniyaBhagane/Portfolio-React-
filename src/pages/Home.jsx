import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";
import ContactSettings from "../Components/ContactSettings";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">   
        
        <ThemeToggle />

        <StarBackground />

        <Navbar />    

        <main>
            <HeroSection />
            <AboutMe />
            <SkillsSection />
            <ProjectsSection />
            <ContactSettings />
        </main>    
    </div>
    )   
}