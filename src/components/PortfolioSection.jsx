import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { content } from "../content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSpinner,
  faExclamationTriangle,
  faTimesCircle,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import LandscapeBookPortfolio from "./LandscapeBookPortfolio";
import { fetchPortfolioById } from "../api";

function PortfolioSection() {
  const id = 1;
  const {
    data: portfolio,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["portfolio", id],
    queryFn: () => fetchPortfolioById(id),
  });

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-16 px-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-dark-blue">
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          {content.portfolio.title}
        </h2>

        {portfolio && (
          <a
            href={portfolio.pdf}
            download
            className="text-dark-blue hover:text-blue-500 cursor-pointer"
          >
            <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
            Télécharger le PDF
          </a>
        )}
      </div>
      <div className="w-full">
        {isLoading && (
          <div className="text-center mt-10">
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              className="text-4xl text-blue-500"
            />
            <p>Chargement...</p>
          </div>
        )}
        {error && (
          <div className="text-center mt-10">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="text-4xl text-red-500"
            />
            <p>Une erreur est survenue lors du chargement du portfolio</p>
          </div>
        )}
        {!portfolio && !isLoading && !error && (
          <div className="text-center mt-10">
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="text-4xl text-gray-500"
            />
            <p>Portfolio introuvable</p>
          </div>
        )}
        {portfolio && <LandscapeBookPortfolio portfolio={portfolio} />}
      </div>
    </motion.section>
  );
}

export default PortfolioSection;
