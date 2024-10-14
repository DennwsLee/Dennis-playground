import { useState } from 'react';

interface TimelineItemProps {
  year: number;
  title: string;
  company: string;
  description: string[];
  isCentered: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, company, description, isCentered }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex items-center w-full h-full transition-all duration-300 ${isCentered ? 'scale-100 opacity-100' : 'scale-90 opacity-50 blur-sm'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex flex-col items-center justify-center h-full transition-all duration-300 ${isHovered && isCentered ? 'w-1/3' : 'w-full'}`}>
        <div className="text-5xl font-bold text-blue-400 mb-4">{year}</div>
        <div className="h-40 w-1 bg-blue-400 relative">
          <div className={`absolute w-4 h-4 bg-blue-400 rounded-full left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isHovered ? 'scale-150' : ''}`} style={{top: '50%'}}></div>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="text-2xl text-gray-300">{company}</p>
        </div>
      </div>
      {isHovered && isCentered && (
        <div className="w-2/3 h-full flex items-center transition-all duration-300 overflow-hidden p-6">
          <ul className="list-disc list-inside text-2xl text-gray-300 space-y-4">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;