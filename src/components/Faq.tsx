import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is this available yet?',
      a: "Not yet — this page is for founding access. The first audits are being run now. Sign up and you'll get each report emailed the moment it publishes, and founding members get Clinician Pro features free when the directory launches.",
    },
    {
      q: "Isn't a BAA or HIPAA compliance enough?",
      a: "They answer different questions. A BAA is a contract about responsibility; the recent class actions were filed under wiretap and state medical-privacy laws, which a BAA doesn't stop. We answer the question neither covers: what did the software actually send during a session?",
    },
    {
      q: 'Vendors pay for audits — can I trust the results?',
      a: 'Vendors pay for testing, not for outcomes. Findings publish as observed, good or bad, with the method stated on every report. Each badge is scoped to one version, one date, and the packets we captured — never a blanket endorsement.',
    },
    {
      q: 'Is this a HIPAA certification?',
      a: "No, and we'll never claim it is. No network test can certify HIPAA compliance or guarantee future versions. We publish exactly what we observed and the limits of the test, on every single report.",
    },
    {
      q: "What if the tool I use isn't tested yet?",
      a: 'Request it. Audit order is set by clinician demand, so the tools people ask about most get tested first. Founding members\' requests go to the top of the queue.',
    },
    {
      q: 'I already picked a scribe — is this still useful?',
      a: "Yes. Follow your tool and you'll get an alert each time a new version is retested, so a quiet update that changes where your data goes doesn't go unnoticed.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="w-full py-20 lg:py-24"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 'var(--max-content-width)' }}
      >
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <h2 className="type-h2 text-[#24302B]">
            Fair questions
          </h2>
        </div>

        <div className="max-w-[840px] border-t border-[#E4DFD5]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-[#E4DFD5]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F6B4E]"
                  aria-expanded={isOpen}
                >
                  <span className="type-h3 text-[#24302B] font-semibold">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#6B7268] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1F6B4E]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pr-6">
                    <p
                      className="type-body text-[#6B7268]"
                      style={{ textWrap: 'pretty' }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
