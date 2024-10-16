import React from 'react';
import Image from 'next/image';
import { FaUser, FaFolder, FaTools, FaBriefcase, FaGraduationCap, FaGithub, FaLinkedin, FaFileAlt, FaBlog, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';

const commonApps = [
  { name: 'About Me', icon: FaUser },
  { name: 'Projects', icon: FaFolder },
  { name: 'Skills', icon: FaTools },
  { name: 'Experience', icon: FaBriefcase },
  { name: 'Education', icon: FaGraduationCap },
];

const menuItems = [
  { name: 'GitHub', icon: FaGithub },
  { name: 'LinkedIn', icon: FaLinkedin },
  { name: 'Resume', icon: FaFileAlt },
  { name: 'Blog', icon: FaBlog },
  { name: 'Contact', icon: FaEnvelope },
];

const StartMenu: React.FC = () => {
  return (
    <div className="fixed bottom-12 left-0 w-full xs:w-1/3 lg:w-1/4 bg-[#3a6ea5] border-r-2 border-t-2 border-[#0054e3] shadow-lg rounded-tr-lg">
      <div className="bg-gradient-to-b from-[#215dc6] to-[#2c89e3] h-16 flex items-center px-4 rounded-tr-lg">
        <Image src="/profile.webp" alt="User Avatar" width={48} height={48} className="border-2 border-white rounded-md" />
        <span className="text-white font-bold ml-2">Dennis Lee</span>
      </div>
      <div className="flex">
        <div className="w-1/2 bg-white p-2">
          {commonApps.map((app) => (
            <div key={app.name} className="flex items-center p-2 hover:bg-[#316ac5] hover:text-white cursor-pointer">
              <app.icon className="w-8 h-8 mr-2" />
              <span className="text-sm">{app.name}</span>
            </div>
          ))}
          <div className="mt-4 border-t border-gray-300 pt-2">
            <div className="flex items-center p-2 hover:bg-[#316ac5] hover:text-white cursor-pointer">
              <FaArrowRight className="w-8 h-8 mr-2" />
              <span className="text-sm">All Programs</span>
              <span className="ml-auto">▶</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#d3e5fa] p-2">
          {menuItems.map((item) => (
            <div key={item.name} className="flex items-center p-1 hover:bg-[#316ac5] hover:text-white cursor-pointer">
              <item.icon className="w-6 h-6 mr-2" />
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#d3e5fa] h-12 flex items-center justify-end px-4 border-t border-gray-300">
        <div className="flex items-center cursor-pointer hover:bg-[#3d75d2] px-2 py-1 rounded mr-2">
          <FaDownload className="w-6 h-6 mr-2" />
          <span className="text-sm">Download Resume</span>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-[#3d75d2] px-2 py-1 rounded">
          <FaEnvelope className="w-6 h-6 mr-2" />
          <span className="text-sm">Contact Me</span>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;