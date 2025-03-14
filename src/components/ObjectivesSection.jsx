import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';

function ObjectivesSection() {
  return (
    <motion.section
      id="objectifs"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-16 px-4 scroll-mt-24 bg-white shadow-md rounded"
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center text-dark-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#062093"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
        {content.objectifs.title}
      </h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {content.objectifs.text}
      </p>
    </motion.section>
  );
}

export default ObjectivesSection;
