import Image from "next/image";
import LandingPage from "./components/landingpage";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";



import About from "./components/ui/About";

import InstructionPage from "./components/ui/Instruction";
import TeamPage from "./components/ui/TeamPage";
import Footer from "./components/ui/Footer";
import FeatureSection from "./components/ui/Features";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: 'Home', link: '/', icon: <FaHome /> },
          { name: 'Home', link: '/', icon: <FaHome /> },
          { name: 'Home', link: '/', icon: <FaHome /> },
          { name: 'Home', link: '/', icon: <FaHome /> },
          { name: 'Home', link: '/', icon: <FaHome /> },
        ]} />
          
          
        <LandingPage />
        
        <About />
    <FeatureSection />
        <InstructionPage />
        <TeamPage />
        <Footer />
        </div>
    
    </main>
  );
}
