import { FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

interface DesktopProps {
  onIconClick: (windowName: string) => void;
}

const Desktop: React.FC<DesktopProps> = ({ onIconClick }) => {
  const icons = [
    { name: 'about', Icon: FaUser, label: 'About Me' },
    { name: 'projects', Icon: FaProjectDiagram, label: 'My Projects' },
    { name: 'skills', Icon: FaTools, label: 'My Skills' },
    { name: 'contact', Icon: FaEnvelope, label: 'Contact Me' },
  ];

  return (
    <div className="p-4 grid grid-cols-6 gap-4">
      {icons.map(({ name, Icon, label }) => (
        <div
          key={name}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => onIconClick(name)}
        >
          <div className="w-16 h-16 bg-transparent flex items-center justify-center">
            <Icon size={32} color="white" />
          </div>
          <span className="mt-1 text-white text-xs text-center">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Desktop;