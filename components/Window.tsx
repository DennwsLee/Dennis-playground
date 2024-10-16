import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface WindowProps {
  title: string;
  icon: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Window: React.FC<WindowProps> = ({ title, icon, onClose, children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ece9d8] border-[1px] border-[#0054e3] rounded-t-lg shadow-md ${className}`}
    >
      <div className="bg-gradient-to-r from-[#0058e1] to-[#3a93ff] text-white px-2 py-1 flex justify-between items-center rounded-t-lg">
        <div className="flex items-center">
          <Image src={icon} alt={title} width={16} height={16} className="mr-2" />
          <h2 className="text-sm font-bold">{title}</h2>
        </div>
        <div className="flex">
          <button onClick={onClose} className="bg-[#e81123] text-white px-2 py-0 text-xs rounded-sm hover:bg-[#f1707a]">
            X
          </button>
        </div>
      </div>
      <div className="p-4 bg-[#fff]">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;