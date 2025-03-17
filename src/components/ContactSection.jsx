import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { content } from '../content';

function ContactSection() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto py-16 px-4"
        >
            <div className="bg-white shadow-xl rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-dark-blue flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    {content.contact.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-dark-blue text-xl" />
                            <a className="text-gray-700 hover:text-dark-blue" href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faPhone} className="text-dark-blue text-xl" />
                            <p className="text-gray-700">{content.contact.phone}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-dark-blue text-xl" />
                            <p className="text-gray-700">{content.contact.address}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h3 className="text-xl font-semibold text-dark-blue">Réseaux Sociaux</h3>
                        <div className="flex space-x-6">
                            <a
                                href={content.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark-blue hover:text-blue-600 transition-colors"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                            </a>
                            <a
                                href={content.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark-blue hover:text-pink-600 transition-colors"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default ContactSection;
