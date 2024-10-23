import { motion } from "framer-motion";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Hello, I&apos;m Your Name
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Full-stack Developer & Designer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="#projects" className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition duration-300">
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}