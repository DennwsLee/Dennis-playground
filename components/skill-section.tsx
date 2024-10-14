import { motion } from "framer-motion";

const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
  { category: "Web Technologies", items: ["React", "Next.js", "Node.js", "Express", "HTML/CSS"] },
  { category: "Data Science & ML", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Heroku"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-white">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-black">{skillGroup.category}</h3>
            <ul className="list-disc list-inside text-gray-800">
              {skillGroup.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="mb-2">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}