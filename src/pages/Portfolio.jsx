import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPortfolioById } from '../api';
import LandscapeBookPortfolio from '../components/LandscapeBookPortfolio';
import PageWrapper from '../components/PageWrapper';

const Portfolio = () => {
  const { id } = useParams();

  const { data: portfolio, isLoading, error } = useQuery({
    queryKey: ['portfolio', id],
    queryFn: () => fetchPortfolioById(id),
  });

  if (isLoading) return <div className="text-center mt-10">Chargement...</div>;
  if (error) return <div className="text-center mt-10">Erreur : {error.message}</div>;
  if (!portfolio) return <div className="text-center mt-10">Portfolio introuvable</div>;

  return (
    <PageWrapper>
      <LandscapeBookPortfolio portfolio={portfolio} />
    </PageWrapper>
  );
};

export default Portfolio;
