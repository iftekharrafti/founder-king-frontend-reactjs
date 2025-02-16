"use client";
import FaqIcon from '@/components/atoms/FaqIcon/FaqIcon';
import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden 
    hover:shadow-lg transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <FaqIcon isOpen={isOpen} />
      </button>
      
      <div
        className={`px-6 transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-48 pb-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;