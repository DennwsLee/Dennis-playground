import React, { useState } from 'react';
import Image from 'next/image';
import StartMenu from '@/components/StartMenu';

interface TaskbarProps {
  openWindows: string[];
  onWindowClick: (windowName: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ openWindows, onWindowClick }) => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#2257d6] to-[#2662df] h-12 flex items-center">
        <button 
          className="bg-gradient-to-b from-[#267426] to-[#01e201] text-white px-5 py-3 mr-2 rounded-r-xl flex items-center font-bold text-lg"
          onClick={toggleStartMenu}
        >
          <Image src="/logo.png" alt="Start" width={24} height={24} className="mr-2 shadow-md" />
          start
        </button>
        {openWindows.map((window) => (
          <button
            key={window}
            className="bg-gradient-to-b from-[#16a7ef] to-[#3a5795] text-white px-4 py-1 mr-1 rounded-t-lg"
            onClick={() => onWindowClick(window)}
          >
            {window}
          </button>
        ))}
        <div className="flex-grow"></div>
        <div className="bg-gradient-to-b from-[#1290e8] to-[#2cc2f9] text-white px-4 py-3 font-light">
          {currentTime}
        </div>
      </div>
      {isStartMenuOpen && <StartMenu />}
    </>
  );
};

export default Taskbar;