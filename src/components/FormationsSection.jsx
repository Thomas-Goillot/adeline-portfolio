import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function FormationsSection() {
  return (
    <motion.section
      id="formations"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-dark-blue">
        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
        {content.formations.title}
      </h2>
      {content.formations.items.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded p-6 mb-4 flex">
          <img
            src={item.image}
            alt={item.title}
            className="w-40 h-40 object-cover rounded mr-6"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{item.description}</p>
          </div>
        </div>
      ))}
    </motion.section>
  );
}

export default FormationsSection;
