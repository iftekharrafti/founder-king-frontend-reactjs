import React from 'react';
import { HiOutlineMail, HiArrowRight, HiSpeakerphone } from 'react-icons/hi';

const Newsletter = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl bg-global-secondary">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Email form */}
          <div className="flex-1 p-2 md:p-10 text-white">

            <div className="relative md:mb-6 mb-1" >
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <HiOutlineMail className="w-5 h-5 text-gray-500" />
              </div>
              <input 
                type="email" 
                className="w-full py-4 pl-12 pr-4 text-gray-800 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-lg"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          {/* Right side - Button */}
          <div className="flex-1 p-2 md:p-10 flex justify-center items-center relative bg-opacity-10 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white opacity-10 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white opacity-10 -ml-20 -mb-20"></div>
            
            <button className="relative group bg-global-primary text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <span className="flex items-center">
                Subscribe Now
                <HiArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;