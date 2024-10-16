import React from 'react';
import Image from 'next/image';

interface DesktopIconProps {
  name: string;
  icon: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ name, icon, onClick }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <Image src={icon} alt={name} width={32} height={32} />
      <span className="text-white text-shadow text-xs mt-1">{name}</span>
    </div>
  );
};

export default DesktopIcon;