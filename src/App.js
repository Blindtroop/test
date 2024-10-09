import React from 'react';
import ArrowCard from './components/TechCard'; // Import your ArrowCard component
import { FaReact } from 'react-icons/fa'; // Import the React icon

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ArrowCard icon={FaReact} techName="React" />
    </div>
  );
};

export default App;
