import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        backgroundColor: 'var(--color-background)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between gap-8 px-6 py-4"
        style={{ maxWidth: 'var(--max-content-width)' }}
      >
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <img
            src="/src/assets/images/logo_privacyproof_1793885188703.jpg"
            alt="PrivacyProof emblem"
            className="w-7 h-7 object-contain rounded-[4px]"
          />
          <span
            className="text-[22px] font-semibold tracking-tight text-[#24302B]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            PrivacyProof
          </span>
        </a>

        {/* Links Zone: How it works · Pricing · FAQ */}
        <nav className="hidden md:flex items-center gap-7 text-[16px] font-normal text-[#24302B]">
          <a
            href="#how-it-works"
            className="hover:text-[#1F6B4E] transition-colors whitespace-nowrap shrink-0"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="hover:text-[#1F6B4E] transition-colors whitespace-nowrap shrink-0"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-[#1F6B4E] transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Action Zone: Exactly one CTA */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onCtaClick}
            className="btn-primary text-[15px] px-5 py-2.5 sm:px-6 sm:py-3"
          >
            Send me the first audit reports
          </button>
        </div>
      </div>
    </header>
  );
};
