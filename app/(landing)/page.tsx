"use client"
import Navbar from '@/components/navbar';
import Timeline from '@/components/Timeline';
import ProjectSection from '@/components/project-section';
import ContactSection from '@/components/contact-section';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-20">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">Hello, I'm Your Name</h1>
          <p className="text-xl text-gray-600 mb-8">
            I'm a full-stack developer and designer passionate about creating innovative solutions.
          </p>
          <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            View My Work
          </a>
        </motion.section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <div className="relative h-[70vh]">
            <Timeline currentIndex={currentIndex} />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4"
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              >
                Previous
              </button>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setCurrentIndex(Math.min(3, currentIndex + 1))}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
}