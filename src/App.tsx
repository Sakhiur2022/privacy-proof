import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CaptureModal } from './components/CaptureModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);
  const [modalSource, setModalSource] = useState('navbar');

  const handleOpenNavCta = () => {
    setSelectedTier(undefined);
    setModalSource('navbar_cta');
    setModalOpen(true);
  };

  const handleSelectTier = (tier: string) => {
    setSelectedTier(tier);
    setModalSource('pricing_' + tier.toLowerCase().replace(/[^a-z0-9]/g, '_'));
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-[#EDF4F0] selection:text-[#1F6B4E]">
      {/* Navigation */}
      <Navbar onCtaClick={handleOpenNavCta} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero (background #FAF8F4) */}
        <Hero />

        {/* 2. Problem (surface #FFFFFF) */}
        <Problem />

        {/* 3. How It Works & Sample Report Card Demo (background #FAF8F4) */}
        <HowItWorks />

        {/* 4. Benefits (surface #FFFFFF) */}
        <Benefits />

        {/* 5. Pricing (background #FAF8F4) */}
        <Pricing onSelectTier={handleSelectTier} />

        {/* 6. FAQ (surface #FFFFFF) */}
        <Faq />

        {/* 7. Final CTA (background #FAF8F4) */}
        <FinalCta />
      </main>

      {/* Footer (surface #FFFFFF) */}
      <Footer />

      {/* Lead Capture Modal for Pricing Tiers and Nav CTA */}
      <CaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tier={selectedTier}
        source={modalSource}
      />
    </div>
  );
}
