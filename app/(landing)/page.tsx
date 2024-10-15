"use client"
import { useState } from 'react';
import Desktop from '@/components/Desktop';
import Window from '@/components/Window';
import Taskbar from '@/components/Taskbar';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const toggleWindow = (windowName: string) => {
    setOpenWindows(prev => 
      prev.includes(windowName)
        ? prev.filter(name => name !== windowName)
        : [...prev, windowName]
    );
  };

  const experienceItems = [
    {
      timeframe: "Jan 2024 - Present",
      title: "Machine Learning Engineer",
      company: "Automorphic AI (YC S23)",
      description: [
        "Researched and developed an approach to long-term memory in LLMs",
        "Developed SQL agent capable of reasoning through cross-table queries",
        "Pioneering a model training technique with just 10 samples",
        "Experimenting with reinforcement fine tuning on Llama 3.2 1B and 3B models"
      ]
    },
    {
      timeframe: "Aug 2024 - Present",
      title: "Data Science / ML Intern",
      company: "Lucid Motors",
      description: [
        "Integrating AI into business operations processes",
        "Developing backend for in-car AI agent",
        "Training text classification pipeline with UI",
        "Fine-tuned Llama 3.1 (70B) for customer feedback classification",
        "Developing a hybrid, low latency and locally hosted voice assistant",
        "Created a customer issue diagnosis system"
      ]
    },
    {
      timeframe: "May 2024 - Aug 2024",
      title: "AI Program Manager Intern",
      company: "Lucid Motors",
      description: [
        "Defined business requirement documentation for use of AI in customer care processes",
        "Used Lucid Chart to outline existing roadside assistance processes and where automation can occur",
        "Meeting with key stakeholders to define specific requirements and communicating with data scientist",
      ]
    },
    {
      timeframe: "Aug 2023 - Dec 2023",
      title: "Undergraduate Researcher",
      company: "Autonomous Connected Transportation Lab",
      description: [
        "Created predictive models using XGBoost, SHAP, PyTorch",
        "Generated multi-objective optimization models (MOO)",
        "Improved transit efficiency by 15% and reduced emissions by 22%"
      ]
    },
    {
      timeframe: "May 2023 - Aug 2023",
      title: "Software Engineer Intern",
      company: "Automorphic AI (YC S23)",
      description: [
        "Designed and optimized inference engine, reducing latency by 17%",
        "Forward deployed engineer in integrating containerized docker environments",
        "Built and deployed 12 web apps using Next.js, Typescript, Python, and SQL",
        "Led the integration of S3 and Redshift for seamless data ingestion"
      ]
    }
  ];

  return (
    <div className={`min-h-screen w-full bg-[#008080] text-black overflow-hidden ${robotoMono.className}`}>
      <Desktop onIconClick={toggleWindow} />
      
      {openWindows.includes('about') && (
        <Window title="About Me - Notepad" onClose={() => toggleWindow('about')}>
          <div className={`min-h-screen w-full bg-[#008080] text-black overflow-hidden ${robotoMono.className}`}>
            <p className="mb-2">Hello, I'm Dennis Lee</p>
            <p>
              I'm a Full-Stack Developer and Data Scientist passionate about creating innovative solutions and deriving insights from data.
            </p>
          </div>
        </Window>
      )}

      {openWindows.includes('experience') && (
        <Window title="My Experience - Resume.txt" onClose={() => toggleWindow('experience')}>
          <div className={`text-sm overflow-y-auto max-h-96 ${robotoMono.className}`}>
            {experienceItems.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold">{item.title}</p>
                <p>{item.company}</p>
                <p className="text-xs">{item.timeframe}</p>
                <ul className="list-disc pl-5 mt-1">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-xs">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Window>
      )}

      {openWindows.includes('projects') && (
        <Window title="My Projects - Projects.txt" onClose={() => toggleWindow('projects')}>
          <div className={`text-sm ${robotoMono.className}`}>
            <p className="font-bold mb-2">Featured Projects:</p>
            <ul className="list-disc pl-5">
              <li>AI-powered customer issue diagnosis system</li>
              <li>Hybrid, low latency voice assistant</li>
              <li>Multi-objective optimization models for transit efficiency</li>
              <li>Containerized inference engine with 17% latency reduction</li>
            </ul>
          </div>
        </Window>
      )}

      {openWindows.includes('skills') && (
        <Window title="My Skills - Skills.txt" onClose={() => toggleWindow('skills')}>
          <div className={`text-sm ${robotoMono.className}`}>
            <p className="font-bold mb-2">Technical Skills:</p>
            <ul className="list-disc pl-5">
              <li>Languages: Python, TypeScript, SQL</li>
              <li>Frameworks: React, Next.js, PyTorch</li>
              <li>AI/ML: LLMs, XGBoost, SHAP</li>
              <li>Cloud: AWS (S3, Redshift, Sagemaker, Bedrock)</li>
              <li>Tools: Docker, Git, Lucid Chart</li>
            </ul>
          </div>
        </Window>
      )}

      {openWindows.includes('contact') && (
        <Window title="Contact Me - Contact.txt" onClose={() => toggleWindow('contact')}>
          <div className={`text-sm ${robotoMono.className}`}>
            <p className="font-bold mb-2">Get in Touch:</p>
            <p className="mb-2">Feel free to reach out for collaborations or inquiries:</p>
            <ul className="list-disc pl-5">
              <li>Email: dennis.lee@example.com</li>
              <li>LinkedIn: linkedin.com/in/dennis-lee</li>
              <li>GitHub: github.com/dennis-lee</li>
            </ul>
          </div>
        </Window>
      )}

      <Taskbar openWindows={openWindows} onWindowClick={toggleWindow} />
    </div>
  );
}