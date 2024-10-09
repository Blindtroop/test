import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaJsSquare, FaBootstrap, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const TechCard = ({ icon: Icon, techName }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative flex-shrink-0 transition-all duration-300 ${
        hovered ? 'w-80' : 'w-64'
      } h-64 bg-primary text-secondary rounded-lg shadow-md cursor-pointer overflow-hidden`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon as background */}
      <div
        className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Icon className="w-48 h-48 text-secondary" />
      </div>

      {/* Text on hover */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-2xl font-bold">{techName}</p>
      </div>
    </div>
  );
};

const TechCardDisplay = () => {
  const techCards = [
    { icon: FaHtml5, name: 'HTML' },
    { icon: FaCss3Alt, name: 'CSS' },
    { icon: FaReact, name: 'React' },
    { icon: FaAngular, name: 'Angular' },
    { icon: FaJsSquare, name: 'JavaScript' },
    { icon: SiTailwindcss, name: 'Tailwind' },
    { icon: FaBootstrap, name: 'Bootstrap' },
    { icon: FaWordpress, name: 'WordPress' },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {techCards.map((tech, index) => (
        <TechCard key={index} icon={tech.icon} techName={tech.name} />
      ))}
    </div>
  );
};

export default TechCardDisplay;
