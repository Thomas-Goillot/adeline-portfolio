import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProfileSection from '../components/ProfileSection';
import ObjectivesSection from '../components/ObjectivesSection';
import PortfolioSection from '../components/PortfolioSection';
import ExperiencesSection from '../components/ExperiencesSection';
import FormationsSection from '../components/FormationsSection';
import CompetencesSection from '../components/CompetencesSection';
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProfileSection />
        <ObjectivesSection />
        <PortfolioSection />
        <ExperiencesSection />
        <FormationsSection />
        <CompetencesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default Home;
