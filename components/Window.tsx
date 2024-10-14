import React from 'react';
import { motion } from 'framer-motion';

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Window: React.FC<WindowProps> = ({ title, onClose, children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c0c0c0] border-[3px] border-[#dfdfdf] border-l-[#808080] border-t-[#808080] shadow-md ${className}`}
    >
      <div className="bg-[#000080] text-white px-1 py-1 flex justify-between items-center">
        <h2 className="text-sm font-bold">{title}</h2>
        <button onClick={onClose} className="bg-[#c0c0c0] text-black px-2 py-0 text-xs border-2 border-[#dfdfdf] border-r-[#808080] border-b-[#808080]">
          X
        </button>
      </div>
      <div className="p-4 bg-[#c0c0c0]">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;