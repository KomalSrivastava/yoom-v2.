import Image from "next/image";
import LandingPage from "./components/landingpage";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import {  FaUserAlt, FaRegListAlt, FaCalendarAlt, FaTasks, FaEnvelope } from 'react-icons/fa'; 
import { FaUser, FaVideo, FaUsers, FaBook } from "react-icons/fa";




import About from "./components/ui/About";

import InstructionPage from "./components/ui/Instruction";
import TeamPage from "./components/ui/TeamPage";
import Footer from "./components/ui/Footer";
import FeatureSection from "./components/ui/Features";
import Link from 'next/link';

const Instructions = () => {
  return <InstructionPage />;
};

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
         navItems={[
           { name: 'Home', link: '/', icon: <FaHome /> },
  { name: 'About Yoom', link: '#about', icon: <FaUserAlt /> },
  { name: 'Dashboard', link: '/dashboard', icon: <FaHome /> },
  { name: 'Features', link: '#features', icon: <FaRegListAlt /> },
  { name: 'Upcoming Meetings', link: '#meetings', icon: <FaCalendarAlt /> },
  { name: 'Instruction', link: '/instruction', icon: <FaHome /> },
  { name: 'Our Team', link: '/team', icon: <FaUserAlt /> },
  { name: 'Contact', link: '#contact', icon: <FaEnvelope /> },
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
