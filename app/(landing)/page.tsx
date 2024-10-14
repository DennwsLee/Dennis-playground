"use client"
import Navbar from '@/components/navbar';
import Timeline from '@/components/Timeline';
import ProjectSection from '@/components/project-section';
import SkillsSection from '@/components/skill-section';
import ContactSection from '@/components/contact-section';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Manrope } from 'next/font/google';
import TimelineNavigation from '@/components/TimelineNavigation';

const manrope = Manrope({ subsets: ['latin'] });

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={`min-h-screen w-full bg-black text-white ${manrope.className}`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">Hello, I'm Dennis Lee</h1>
          <p className="text-xl text-gray-400 mb-8">
            I'm a Full-Stack Developer and Data Scientist passionate about creating innovative solutions and deriving insights from data.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              View My Projects
            </a>
            <a href="#skills" className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
              Explore My Skills
            </a>
          </div>
        </motion.section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <div className="relative h-[70vh] max-w-6xl mx-auto">
            <Timeline currentIndex={currentIndex} />
            <TimelineNavigation
              onPrev={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              onNext={() => setCurrentIndex(Math.min(4, currentIndex + 1))}
            />
          </div>
        </section>

        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}