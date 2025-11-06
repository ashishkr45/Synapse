import React from 'react';
import SecBrainIcon from '../../icons/SecBrainIcon';
import { XIcon, LinkedInIcon, GithubIcon } from '../../icons/Icons';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  
  const linkStyle = `transition-colors duration-300 ${isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-indigo-700'}`;

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <footer className={`w-full md:px-32 transition-all duration-300 ${isDarkMode ? 'bg-[#191a1a]': 'bg-[#eaeaea]'}`}>
      <div className={`w-full rounded-3xl transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/60' : 'bg-blue-900/10'}`}>
        <div className="max-w-7xl mx-auto p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div >
              <SecBrainIcon width="45" height="45" className={isDarkMode ? 'text-white' : 'text-black'}/>
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Quick Links</h3>
              <div className="flex flex-col space-y-3">
                <a href="#features" onClick={(e) => handleScroll(e, 'features')} className={linkStyle}>Features</a>
                <a href="/about" className={linkStyle}>About</a>
              </div>
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</h3>
              <div className="flex flex-col space-y-3">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqhSMCPjrnlxbcHbBXLmDdpLJNxszPtcjJWfBQZGrDJxjKFHHKgRzvfVsTzcvRDstSJjTG" 
                  className={linkStyle} target="_blank"  >
                  mail
                </a>
              </div>
            </div>

            <div>
              <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Follow Us</h3>
              <div className="flex flex-col space-y-3">
                <a href="https://github.com/ashishkr45" target="_blank" className={`flex items-center space-x-3 ${linkStyle}`}>
                  <GithubIcon className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://x.com/Ashucifer" target="_blank" className={`flex items-center space-x-3 ${linkStyle}`}>
                  <XIcon className="h-5 w-5"/>
                  <span>X</span>
                </a>
                <a href="https://www.linkedin.com/in/ashishkr45/" target="_blank" className={`flex items-center space-x-3 ${linkStyle}`}>
                  <LinkedInIcon className="h-5 w-5"/>
                  <span>Linkedin</span>
                </a>
              </div>
            </div>
          </div>

          <div className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Second Brain. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;