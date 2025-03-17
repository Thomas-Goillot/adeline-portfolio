import React, { useState, useEffect } from 'react';
import { content } from '../content';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.nav.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveId(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActiveId(id);
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-dark-blue">
            {content.header.name}
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 text-gray-700 font-medium">
          {content.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-dark-blue transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 bg-white shadow-lg z-50 w-64 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 text-2xl font-bold text-dark-blue flex justify-between items-center">
          {content.header.name}
        </div>
        <ul className="space-y-4 p-4 text-gray-700 font-medium">
          {content.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-dark-blue transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
