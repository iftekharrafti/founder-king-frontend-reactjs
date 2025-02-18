import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamMemberCard = ({ image, name, role, linkedIn, twitter }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl 
    transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
        group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            <a href={linkedIn} className="text-white hover:text-indigo-300 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href={twitter} className="text-white hover:text-indigo-300 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-indigo-500 font-medium">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;