import { useRef, useEffect } from 'react';
import TimelineItem from '@/components/TimelineItem';

interface TimelineProps {
  currentIndex: number;
}

const Timeline: React.FC<TimelineProps> = ({ currentIndex }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const items = [
    { year: 2021, title: "Project A", description: "Description of Project A", link: "https://planform.app" },
    { year: 2022, title: "Project B", description: "Description of Project B", link: "https://mel-edy-dusky.vercel.app" },
    { year: 2023, title: "Project C", description: "Description of Project C", link: "https://example.com/projectC" },
    { year: 2024, title: "Project D", description: "Description of Project D", link: "https://example.com/projectD" },
  ];

  return (
    <div 
      ref={scrollRef}
      className="flex overflow-x-hidden w-full h-full snap-x snap-mandatory"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {items.map((item, index) => (
        <div key={item.year} className="snap-center flex-shrink-0 w-full h-full">
          <TimelineItem 
            {...item}
            isCentered={index === currentIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;