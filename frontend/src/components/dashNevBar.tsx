import React from 'react';
import SecBrainIcon from "../icons/SecBrainIcon";

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
	onAddContentClick: () => void; 
}

const DashNavigation: React.FC<NavigationProps> = ({ isDarkMode, toggleDarkMode, onAddContentClick }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 pointer-events-auto">
      <nav className={`flex flex-wrap items-center px-4 md:px-8 py-2 gap-2 md:gap-4 rounded-4xl 
        backdrop-blur-md border transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-600/40 border-slate-300/30 text-gray-50' 
          : 'bg-slate-300/40 border-gray-600/30 text-gray-900'
      }`}>
        {/* Logo Section */}
        <div className='flex items-center space-x-2 md:space-x-3'>
          <div className="flex justify-center cursor-pointer"
          >
            <SecBrainIcon width="28" height="28" className="md:w-8 md:h-8" />
          </div>
          <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Second Brain
          </span>
        </div>

        <button
          className={`cursor-pointer font-medium px-3 md:px-6 py-2 rounded-full transition-all duration-200 text-sm md:text-base ${
            isDarkMode 
              ? 'hover:bg-gray-700/60 hover:text-blue-400 text-gray-300' 
              : 'hover:bg-neutral-400/40 hover:text-indigo-900 text-gray-700'
          }`}
        >
          Share
        </button>
        <button
          className={`cursor-pointer font-medium px-3 md:px-6 py-2 rounded-full transition-all duration-200 flex items-center space-x-1 md:space-x-2 text-sm md:text-base ${
            isDarkMode 
              ? 'hover:bg-gray-700/60 hover:text-yellow-400 text-gray-300' 
              : 'hover:bg-neutral-400/40 hover:text-purple-900 text-gray-700'
          }`}
          onClick={toggleDarkMode}
        >
          <span>{isDarkMode ? 'Light' : 'Dark'}</span>
          {isDarkMode ? (
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
                
        <button 
          onClick={onAddContentClick}
          className={`font-medium px-4 md:px-6 py-2 rounded-full transition-all duration-200 transform shadow-sm ml-2 md:ml-4 bg-blue-900/90 hover:bg-blue-600/80 text-white text-sm md:text-base`}
        >
          Add
        </button>
      </nav>
    </div>
  );
};

export default DashNavigation;