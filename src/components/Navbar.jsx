import React from 'react';
import { content } from '../content';

function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-dark-blue">{content.header.name}</div>
        <ul className="flex space-x-4 text-gray-700 font-medium">
          {content.nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-dark-blue transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
