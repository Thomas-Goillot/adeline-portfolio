import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired, faIdBadge, faTools, faLaptopCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
import HorizontalScrollCarousel from './HorizontalScrollCarousel';

function CompetencesSection() {
  function renderSectionIcon(iconName) {
    switch (iconName) {
      case "faIdBadge":
        return <FontAwesomeIcon icon={faIdBadge} className="mr-2" />;
      case "faTools":
        return <FontAwesomeIcon icon={faTools} className="mr-2" />;
      case "faLaptopCode":
        return <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />;
      case "faGlobe":
        return <FontAwesomeIcon icon={faGlobe} className="mr-2" />;
      default:
        return null;
    }
  }

  return (
    <motion.section
      id="competences"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-dark-blue">
        <FontAwesomeIcon icon={faNetworkWired} className="mr-2" />
        {content.competences.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.competences.sections.map((section, index) => {
          if (
            section.title === "Logiciels" ||
            section.title === "Compétences techniques"
          ) {
            return (
              <div key={index} className="bg-white shadow-md rounded p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {renderSectionIcon(section.icon)} {section.title}
                </h3>
                <HorizontalScrollCarousel items={section.items} />
              </div>
            );
          } else {
            return (
              <div key={index} className="bg-white shadow-md rounded p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {renderSectionIcon(section.icon)} {section.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </motion.section>
  );
}

export default CompetencesSection;
