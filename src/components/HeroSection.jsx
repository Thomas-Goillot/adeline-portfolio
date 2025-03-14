import React from 'react';
import { content } from '../content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('${content.hero.backgroundImage}')` }}
    >
      <div className="bg-black bg-opacity-40 absolute inset-0"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.hero.title}</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">{content.hero.subtitle}</p>
        <div className="flex space-x-10 mt-4 justify-center">
            <a href="#contact" className="bg-white text-black font-semibold px-4 py-2 rounded">
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Me contacter
            </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
