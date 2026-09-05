import React, { useState, useEffect } from 'react';
import myPhoto from './assets/mine.jpg';
import { 
  FaUser, 
  FaPenNib, 
  FaEnvelope, 
  FaYoutube, 
  FaLinkedin,  
  FaGithub,
  FaDiscord,
  FaLink
} from 'react-icons/fa';
import './App.css';

const IconMap = {
  FaUser: FaUser,
  FaPenNib: FaPenNib,
  FaEnvelope: FaEnvelope,
  FaYoutube: FaYoutube,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaDiscord: FaDiscord
};

function App() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/links')
      .then(res => res.json())
      .then(data => {
        setLinks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch links", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white flex">
      {/* Corner geometric patterns */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-dots opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-dots opacity-40 rounded-full z-0"></div>

      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 md:w-24 bg-white/80 backdrop-blur-sm shadow-sm z-50 flex flex-col items-center justify-center py-8 gap-4 border-r border-teal-50">
        {loading ? (
           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-400"></div>
        ) : (
          links.map(link => {
            const IconComponent = IconMap[link.iconName] || FaLink;
            return (
              <a 
                key={link.id} 
                href={link.url}
                title={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center shadow-lg hover:shadow-teal-500/40 transition-all transform hover:-translate-y-1"
              >
                <IconComponent className="text-2xl md:text-3xl" />
              </a>
            )
          })
        )}
      </nav>

      {/* Main Content Area */}
      <main className="ml-20 md:ml-24 flex-1 min-h-screen flex items-center justify-center relative z-10 px-8">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          {/* Center-Left: Profile Image with fluid blob */}
          <div className="relative flex-shrink-0 flex items-center justify-center">
            {/* Fluid SVG blob background */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-72 h-72 md:w-96 md:h-96 text-teal-100/80 -z-10 animate-blob">
              <path fill="currentColor" d="M45.7,-76.4C58.9,-69.3,69,-55.4,77.5,-41.2C85.9,-27,92.8,-12.4,90.5,1.2C88.2,14.8,76.6,27.5,67.1,40.1C57.6,52.8,50.1,65.3,39,73.1C27.9,80.9,13.9,84,0.1,83.9C-13.8,83.7,-27.5,80.3,-39.8,73.2C-52.2,66.1,-63.1,55.3,-71.4,42.5C-79.6,29.7,-85.1,14.9,-85.5,-0.2C-85.8,-15.3,-81,-30.6,-72.1,-43.3C-63.2,-56,-50.2,-66.1,-36.5,-73C-22.8,-79.9,-11.4,-83.6,1.8,-86.6C15.1,-89.6,30.3,-92.1,45.7,-76.4Z" transform="translate(100 100)" />
            </svg>
            
            <img 
              src={myPhoto} 
              alt="Nandun" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>

          {/* Center-Right: Text Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              I'm
            </h1>
            <h2 className="text-6xl md:text-8xl font-black text-teal-500 tracking-tight leading-tight">
              Nandun
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mt-4 font-medium">
              I am a cyber security enthusiast.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
