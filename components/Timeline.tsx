import { useRef, useEffect, useState } from 'react';
import TimelineItem from '@/components/TimelineItem';

interface TimelineProps {
  currentIndex: number;
}

const Timeline: React.FC<TimelineProps> = ({ currentIndex }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [prevIndex, setPrevIndex] = useState(currentIndex);

  useEffect(() => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      const newDirection = currentIndex > prevIndex ? 'right' : 'left';
      setDirection(newDirection);
      scrollRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });
    }
    setPrevIndex(currentIndex);
  }, [currentIndex, prevIndex]);

  const items = [
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
    <div 
      ref={scrollRef}
      className="flex overflow-x-hidden w-full h-full snap-x snap-mandatory"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {items.map((item, index) => (
        <div key={item.timeframe + item.title} className="snap-center flex-shrink-0 w-full h-full">
          <TimelineItem 
            {...item}
            isCentered={index === currentIndex}
            direction={direction}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;