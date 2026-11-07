import React from 'react';
import { EmailCaptureForm } from './EmailCaptureForm';

interface CaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier?: string;
  source?: string;
}

export const CaptureModal: React.FC<CaptureModalProps> = ({
  isOpen,
  onClose,
  tier,
  source = 'pricing_modal',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(36, 48, 43, 0.45)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg p-6 sm:p-8 bg-[#FFFFFF] relative transition-transform duration-200"
        style={{
          borderRadius: 'var(--radius)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--card-shadow)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6B7268] hover:text-[#24302B] p-2"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="mb-6 space-y-2">
          {tier && (
            <span className="type-small font-semibold text-[#1F6B4E]">
              Selected Tier: {tier}
            </span>
          )}
          <h3 className="type-h2 text-[#24302B]">
            Founding Member Early Access
          </h3>
          <p className="type-body text-[#6B7268]">
            Founding members get every audit report emailed as it publishes, plus Clinician Pro features free when the directory launches.
          </p>
        </div>

        <EmailCaptureForm
          source={source}
          tier={tier}
          stacked={true}
          buttonText="Send me the first audit reports"
        />
      </div>
    </div>
  );
};
