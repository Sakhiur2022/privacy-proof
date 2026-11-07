import React from 'react';
import { EmailCaptureForm } from './EmailCaptureForm';

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 'var(--max-content-width)' }}
      >
        {/* Section Headline */}
        <div className="max-w-[760px] mb-14 lg:mb-16">
          <h2 className="type-h2 text-[#24302B]">
            We run the test you can't
          </h2>
        </div>

        {/* 3 Numbered Open Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {/* Step 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-mono font-semibold text-[#1F6B4E] tracking-wider uppercase">
                Step 1
              </span>
            </div>
            <h3 className="type-h3 text-[#24302B] font-semibold">
              We record a mock session.
            </h3>
            <p className="type-body text-[#6B7268]" style={{ textWrap: 'pretty' }}>
              Each scribe runs through a scripted 20-minute mock therapy session with synthetic audio in a clean sandbox, and we capture every single outbound packet.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-mono font-semibold text-[#1F6B4E] tracking-wider uppercase">
                Step 2
              </span>
            </div>
            <h3 className="type-h3 text-[#24302B] font-semibold">
              We pull the plug.
            </h3>
            <p className="type-body text-[#6B7268]" style={{ textWrap: 'pretty' }}>
              We repeat the entire session in airplane mode, so you know exactly what works — and what breaks — with no network at all.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-mono font-semibold text-[#1F6B4E] tracking-wider uppercase">
                Step 3
              </span>
            </div>
            <h3 className="type-h3 text-[#24302B] font-semibold">
              You get the plain-English report.
            </h3>
            <p className="type-body text-[#6B7268]" style={{ textWrap: 'pretty' }}>
              Every tool gets a version-dated report and a scoped badge, and you get an alert when a new version ships and we retest.
            </p>
          </div>
        </div>

        {/* DEMO MOMENT: Introduction line */}
        <div className="max-w-[840px] mx-auto mb-6">
          <p className="type-body text-[#24302B] font-medium">
            Here is the exact report every tool gets — this one uses a fictional tool so you can see the format.
          </p>
        </div>

        {/* Worked-Example Report Card */}
        <div
          className="max-w-[840px] mx-auto bg-[#FFFFFF] p-8 sm:p-10 card-spec-shadow"
          style={{
            borderRadius: 'var(--radius)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Header block */}
          <div className="border-b border-[#E4DFD5] pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <span className="text-[13px] font-mono font-semibold text-[#6B7268] tracking-widest uppercase">
                PRIVACYPROOF AUDIT REPORT — SAMPLE
              </span>
              <span className="text-[13px] font-mono text-[#6B7268]">
                ID: PRV-2026-03-SMPL
              </span>
            </div>

            <h3 className="text-[22px] font-semibold text-[#24302B] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
              Tool: SampleScribe v2.4 · macOS 15.2 · MacBook Air M2
            </h3>
            <p className="text-[14px] text-[#6B7268] italic mb-3">
              (Fictional demo tool — real reports name real products.)
            </p>
            <p className="type-small text-[#6B7268]">
              Test date: March 2026 · 20-minute scripted mock therapy session, synthetic audio, clean sandbox, all traffic captured. Repeated in airplane mode.
            </p>
          </div>

          {/* Section: WHAT WE OBSERVED */}
          <div className="mb-8 space-y-4">
            <h4 className="text-[13px] font-mono font-bold text-[#24302B] tracking-wider uppercase">
              WHAT WE OBSERVED
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#1F6B4E] font-bold text-base leading-none mt-1 select-none">
                  ✓
                </span>
                <p className="type-body text-[#24302B]">
                  Full transcript and session note generated offline, in airplane mode.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#1F6B4E] font-bold text-base leading-none mt-1 select-none">
                  ✓
                </span>
                <p className="type-body text-[#24302B]">
                  No audio or transcript content left the device at any point in the session.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#B07A2A] font-bold text-base leading-none mt-1 select-none">
                  ⚠
                </span>
                <div className="space-y-2 w-full">
                  <p className="type-body text-[#24302B]">
                    2 outbound connections with network on:
                  </p>
                  
                  {/* Monospace connection lines */}
                  <div
                    className="p-4 bg-[#FAF8F4] space-y-2 text-[14px] text-[#24302B]"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-[#6B7268] select-none">1.</span>
                      <div>
                        <span className="font-semibold text-[#24302B]">api.samplescribe.com</span>
                        <span className="text-[#6B7268]"> — license check at launch · 342 bytes · no audio or text payload</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#6B7268] select-none">2.</span>
                      <div>
                        <span className="font-semibold text-[#24302B]">sentry.io</span>
                        <span className="text-[#6B7268]"> — crash reporting · can be turned off in Settings → Privacy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: PLAIN-ENGLISH VERDICT */}
          <div className="mb-8 p-5 bg-[#FAF8F4] border border-[#E4DFD5]" style={{ borderRadius: 'var(--radius)' }}>
            <h4 className="text-[13px] font-mono font-bold text-[#24302B] tracking-wider uppercase mb-2">
              PLAIN-ENGLISH VERDICT
            </h4>
            <p className="type-body text-[#24302B]" style={{ textWrap: 'pretty' }}>
              Session audio and notes stayed on the device in this test. The app phones home once at launch to confirm your license — that request contained no session content.
            </p>
          </div>

          {/* Section: BADGE & LIMITS */}
          <div className="pt-6 border-t border-[#E4DFD5] space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="type-small font-bold text-[#1F6B4E] uppercase tracking-wide">
                BADGE:
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[13px] font-semibold text-white"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                LOCAL-ONLY VERIFIED — v2.4 · tested March 2026 · this version only
              </span>
            </div>

            <p className="type-small text-[#6B7268]">
              <span className="font-semibold text-[#24302B]">LIMITS:</span> This covers this version, this device, this date. It is not a HIPAA certification and cannot guarantee future versions behave the same.
            </p>
          </div>
        </div>

        {/* Email Capture Form directly below the card */}
        <div className="max-w-[840px] mx-auto mt-8 p-6 bg-[#FFFFFF] border border-[#E4DFD5]" style={{ borderRadius: 'var(--radius)' }}>
          <p className="type-body font-semibold text-[#24302B] mb-2">
            Get audit reports like this for every local AI note tool
          </p>
          <EmailCaptureForm source="sample_report_card" />
        </div>
      </div>
    </section>
  );
};
