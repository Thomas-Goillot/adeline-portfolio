import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ProfileSection() {
  return (
    <motion.section
      id="profil"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-dark-blue">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        {content.profile.title}
      </h2>
      <div className="flex flex-col md:flex-row md:items-center">
        <img
          src={content.profile.image}
          alt="Portrait Adeline Doche"
          className="w-40 h-40 object-cover rounded-full mb-6 md:mb-0 md:mr-8"
        />
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content.profile.text}
        </p>
      </div>
    </motion.section>
  );
}

export default ProfileSection;
