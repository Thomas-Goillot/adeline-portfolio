import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ExperiencesTimeline({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative">
      <div className="border-l-2 border-gray-300 ml-4">
        {items.map((exp, index) => (
          <div key={index} className="mb-4 relative">
            <div className="flex">
              <div className="absolute -left-3.5 top-0 w-7 h-7 bg-dark-blue rounded-full border-4 border-white"></div>
              <div className="ml-4 w-full">
                <div className="flex justify-between items-center gap-2">
                  <h3
                    className="text-xl font-semibold cursor-pointer hover:text-dark-blue transition-colors"
                    onClick={() => handleClick(index)}
                  >
                    {exp.title}
                  </h3>
                  {selectedIndex === index && (
                    <a
                      href={content.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark-blue hover:text-blue-600 transition-colors"
                    >
                      Voir sur LinkedIn <FontAwesomeIcon icon={faLinkedin} className="ml-1" />
                    </a>
                  )}
                </div>
                {selectedIndex !== index && (
                  <p className="text-gray-700 whitespace-pre-line mt-2">
                    {(exp.description || "Aucune description disponible.").split(' ').slice(0, 20).join(' ') + '...'}
                    {exp.description && exp.description.split(' ').length > 20 && (
                      <button
                        onClick={() => handleClick(index)}
                        className="text-dark-blue hover:underline ml-2"
                      >
                        Voir plus
                      </button>
                    )}
                  </p>
                )}
                <AnimatePresence>
                  {selectedIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-2 flex flex-col md:flex-row gap-4"
                    >
                      {exp.image && (
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-40 h-40 object-cover rounded"
                        />
                      )}
                      <div>
                        <p className="text-gray-700 whitespace-pre-line">
                          {exp.description || "Aucune description disponible."}
                        </p>
                        {exp.description && exp.description.split(' ').length > 20 && (
                          <button
                            onClick={() => handleClick(index)}
                            className="text-dark-blue hover:underline mt-2"
                          >
                            {selectedIndex === index ? 'Voir moins' : 'Voir plus'}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperiencesTimeline;
