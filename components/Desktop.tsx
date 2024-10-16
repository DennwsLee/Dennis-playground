import React from 'react';
import Image from 'next/image';

interface DesktopProps {
  onIconClick: (windowName: string) => void;
  children?: React.ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ onIconClick }) => {
  const icons = [
    { name: 'about', icon: '/icons/my-computer.png', label: 'My Computer' },
    { name: 'experience', icon: '/icons/my-documents.png', label: 'My Documents' },
    { name: 'projects', icon: '/icons/my-pictures.png', label: 'My Pictures' },
    { name: 'skills', icon: '/icons/my-music.png', label: 'My Music' },
    { name: 'contact', icon: '/icons/network.png', label: 'Network' },
  ];

  return (
    <div className="p-4 grid grid-cols-12 gap-4">
      {icons.map(({ name, icon, label }) => (
        <div
          key={name}
          className="flex flex-col items-center cursor-pointer col-span-1"
          onClick={() => onIconClick(name)}
        >
          <Image src={icon} alt={label} width={32} height={32} />
          <span className="mt-1 text-white text-xs text-center text-shadow">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Desktop;