import React from 'react';
import { EmailCaptureForm } from './EmailCaptureForm';

export const FinalCta: React.FC = () => {
  return (
    <section
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 'var(--max-content-width)' }}
      >
        <div
          className="max-w-[800px] mx-auto bg-[#FFFFFF] p-8 sm:p-12 text-center card-spec-shadow"
          style={{
            borderRadius: 'var(--radius)',
            border: '1px solid var(--color-border)',
          }}
        >
          <h2 className="type-h2 text-[#24302B] mb-4">
            Know what leaves the device — before your clients' sessions do.
          </h2>

          <p
            className="type-body text-[#6B7268] max-w-[560px] mx-auto mb-8"
            style={{ textWrap: 'pretty' }}
          >
            Founding members get every audit report emailed as it publishes, plus Clinician Pro free at launch. No card, just an email.
          </p>

          <div className="max-w-[520px] mx-auto">
            <EmailCaptureForm source="final_cta" stacked={false} />
          </div>
        </div>
      </div>
    </section>
  );
};
