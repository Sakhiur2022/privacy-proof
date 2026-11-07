import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tier: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  return (
    <section
      id="pricing"
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 'var(--max-content-width)' }}
      >
        <div className="max-w-[760px] mb-14 lg:mb-16">
          <h2 className="type-h2 text-[#24302B]">
            Free for every clinician to search
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {/* Card 1: Directory */}
          <div
            className="bg-[#FFFFFF] p-8 flex flex-col justify-between card-spec-shadow"
            style={{
              borderRadius: 'var(--radius)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div>
              <div className="mb-4">
                <h3 className="type-h3 text-[#24302B] font-semibold mb-1">
                  Directory
                </h3>
                <div className="text-[32px] font-semibold text-[#24302B] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  Free
                </div>
              </div>

              <p className="type-small text-[#6B7268] mb-6">
                Best for: solo therapists comparing tools before they buy.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E4DFD5]">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B]">
                    Search all published audit reports
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B]">
                    Airplane-mode results and badge status for every tool
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B]">
                    Email alert when a new report publishes
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-auto">
              <button
                onClick={() => onSelectTier('Directory (Free)')}
                className="btn-primary w-full text-[15px]"
              >
                Send me the first audit reports
              </button>
            </div>
          </div>

          {/* Card 2: Clinician Pro (Recommended) */}
          <div
            className="bg-[#FFFFFF] p-8 flex flex-col justify-between card-spec-shadow relative lg:-translate-y-2 lg:scale-[1.03] z-10"
            style={{
              borderRadius: 'var(--radius)',
              border: '2px solid var(--color-accent)',
            }}
          >
            {/* Small accent badge reading 'Recommended' */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span
                className="px-3 py-1 text-[12px] font-semibold tracking-wider text-white uppercase"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Recommended
              </span>
            </div>

            <div>
              <div className="mb-4">
                <h3 className="type-h3 text-[#24302B] font-semibold mb-1">
                  Clinician Pro
                </h3>
                <div className="text-[32px] font-semibold text-[#24302B] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  $19<span className="text-[17px] font-normal text-[#6B7268]">/mo</span>
                </div>
              </div>

              <p className="type-small text-[#6B7268] mb-6">
                Best for: clinicians choosing a scribe this quarter.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E4DFD5]">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B] font-medium">
                    Everything in Directory
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B]">
                    Full connection-level findings on every report
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B]">
                    Side-by-side comparison of up to 3 tools
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B]">
                    Retest alerts for the tools you follow
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-auto">
              <button
                onClick={() => onSelectTier('Clinician Pro ($19/mo)')}
                className="btn-primary w-full text-[15px]"
              >
                Reserve Pro early access
              </button>
            </div>
          </div>

          {/* Card 3: Practice */}
          <div
            className="bg-[#FFFFFF] p-8 flex flex-col justify-between card-spec-shadow"
            style={{
              borderRadius: 'var(--radius)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div>
              <div className="mb-4">
                <h3 className="type-h3 text-[#24302B] font-semibold mb-1">
                  Practice
                </h3>
                <div className="text-[32px] font-semibold text-[#24302B] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  $299<span className="text-[17px] font-normal text-[#6B7268]">/yr</span>
                </div>
              </div>

              <p className="type-small text-[#6B7268] mb-6">
                Best for: group practices with 2–10 clinicians.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E4DFD5]">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B] font-medium">
                    Everything in Pro, for up to 10 team members
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B]">
                    One-page procurement summary exports
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#1F6B4E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="type-small text-[#24302B]">
                    Priority queue for audit requests
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-auto">
              <button
                onClick={() => onSelectTier('Practice ($299/yr)')}
                className="btn-secondary w-full text-[15px]"
              >
                Reserve Practice early access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
