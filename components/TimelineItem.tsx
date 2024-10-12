import { useState } from 'react';

interface TimelineItemProps {
  year: number;
  title: string;
  description: string;
  link: string;
  isCentered: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, link, isCentered }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex items-center w-full h-full transition-all duration-300 ${isCentered ? 'scale-100 opacity-100' : 'scale-90 opacity-50 blur-sm'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex flex-col items-center space-y-4 transition-all duration-300 ${isHovered && isCentered ? 'w-1/3' : 'w-full'}`}>
        <div className="text-3xl font-bold text-blue-400">{year}</div>
        <div className="h-40 w-1 bg-blue-400 relative">
          <div className={`absolute w-4 h-4 bg-blue-400 rounded-full left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isHovered ? 'scale-150' : ''}`} style={{top: isHovered ? '100%' : '50%'}}></div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
        </div>
      </div>
      {isHovered && isCentered && (
        <div className="w-2/3 h-full border border-blue-400 rounded transition-all duration-300 overflow-hidden">
          <iframe src={link} className="w-full h-full" title={title}></iframe>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;