import React from 'react';
import Image from 'next/image';

interface TaskbarProps {
  openWindows: string[];
  onWindowClick: (windowName: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ openWindows, onWindowClick }) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#c0c0c0] h-10 flex items-center px-1 border-t-2 border-[#dfdfdf]">
      <button className="bg-[#c0c0c0] text-black px-4 py-1 mr-2 border-2 border-[#dfdfdf] border-r-[#808080] border-b-[#808080]">
        <Image src="/icons/windows-logo.png" alt="Start" width={16} height={16} className="inline mr-2" />
        Start
      </button>
      {openWindows.map((window) => (
        <button
          key={window}
          className="bg-[#c0c0c0] text-black px-4 py-1 mr-1 border-2 border-[#dfdfdf] border-r-[#808080] border-b-[#808080]"
          onClick={() => onWindowClick(window)}
        >
          {window}
        </button>
      ))}
      <div className="flex-grow"></div>
      <div className="bg-[#c0c0c0] text-black px-2 py-1 border-2 border-[#808080] border-r-[#dfdfdf] border-b-[#dfdfdf]">
        <Image src="/icons/speaker.png" alt="Speaker" width={16} height={16} className="inline mr-2" />
        <Image src="/icons/network.png" alt="Network" width={16} height={16} className="inline mr-2" />
        {currentTime}
      </div>
    </div>
  );
};

export default Taskbar;