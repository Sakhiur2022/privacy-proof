import React, { useState, useEffect } from 'react';
import { getLocalLeads } from '../lib/storage';
import { LeadSubmission } from '../types';

export const Footer: React.FC = () => {
  const [showTester, setShowTester] = useState(false);
  const [leads, setLeads] = useState<LeadSubmission[]>([]);

  const handleRefreshLeads = () => {
    setLeads(getLocalLeads());
  };

  useEffect(() => {
    if (showTester) {
      handleRefreshLeads();
    }
  }, [showTester]);

  return (
    <footer
      className="w-full py-14"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        className="mx-auto px-6 space-y-8"
        style={{ maxWidth: 'var(--max-content-width)' }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img
              src="/src/assets/images/logo_privacyproof_1793885188703.jpg"
              alt="PrivacyProof emblem"
              className="w-6 h-6 object-contain rounded-[4px]"
            />
            <span
              className="text-[20px] font-semibold text-[#24302B]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              PrivacyProof
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-[15px] text-[#6B7268]">
            <a href="#how-it-works" className="hover:text-[#1F6B4E] transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hover:text-[#1F6B4E] transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[#1F6B4E] transition-colors">
              FAQ
            </a>
            <button
              onClick={() => {
                setShowTester(!showTester);
                handleRefreshLeads();
              }}
              className="text-xs text-[#6B7268] hover:text-[#1F6B4E] underline underline-offset-4"
              title="Inspect captured signups on this device"
            >
              Audit Leads ({getLocalLeads().length})
            </button>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#E4DFD5] text-[14px] text-[#6B7268]">
          <p>
            Independent packet-capture audits of AI note tools. Built for solo clinicians and small practices.
          </p>
          <p>
            &copy; {new Date().getFullYear()} PrivacyProof. All rights reserved.
          </p>
        </div>

        {/* Lead Capture Inspector for Testing & Verification */}
        {showTester && (
          <div
            className="p-5 bg-[#FAF8F4] border border-[#E4DFD5] space-y-3"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <div className="flex items-center justify-between">
              <span className="type-small font-mono font-semibold text-[#24302B]">
                Captured Leads Registry (Local Verification)
              </span>
              <button
                onClick={handleRefreshLeads}
                className="text-xs text-[#1F6B4E] font-medium hover:underline"
              >
                Refresh
              </button>
            </div>
            {leads.length === 0 ? (
              <p className="type-small text-[#6B7268]">
                No leads recorded yet. Submit any email above to verify capture.
              </p>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {leads.map((l, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-white border border-[#E4DFD5] text-xs font-mono flex items-center justify-between gap-4"
                    style={{ borderRadius: '4px' }}
                  >
                    <span className="font-semibold text-[#24302B]">{l.email}</span>
                    <span className="text-[#6B7268]">
                      source: {l.source} {l.tier ? `· tier: ${l.tier}` : ''}
                    </span>
                    <span className="text-[#6B7268]">
                      {new Date(l.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </footer>
  );
};
