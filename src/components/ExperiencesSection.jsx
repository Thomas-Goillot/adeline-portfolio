import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import ExperiencesTimeline from './ExperiencesTimeline';

function ExperiencesSection() {
  return (
    <motion.section
      id="experiences"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-dark-blue">
        <FontAwesomeIcon icon={faListCheck} className="mr-2" />
        {content.experiences.title}
      </h2>
      <ExperiencesTimeline items={content.experiences.items} />
    </motion.section>
  );
}

export default ExperiencesSection;
