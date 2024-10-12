import { motion } from "framer-motion";
import Link from 'next/link';

export default function ProjectSection() {
  const projects = [
    { 
      title: "Project A", 
      description: "Description of Project A",
      link: "https://planform.app"
    },
    { 
      title: "Project B", 
      description: "Description of Project B",
      link: "https://mel-edy-dusky.vercel.app"
    },
    { 
      title: "Project C", 
      description: "Description of Project C",
      link: "https://example.com/projectC"
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-full md:w-1/2">
              <iframe
                src={project.link}
                className="w-full aspect-video rounded-lg shadow-lg"
                title={`${project.title} Preview`}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link href={project.link} className="text-blue-500 hover:text-blue-600 font-semibold">
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}