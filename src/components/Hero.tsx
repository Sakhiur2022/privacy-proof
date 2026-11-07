import React from "react";
import { EmailCaptureForm } from "./EmailCaptureForm";
import heroImg from "../assets/images/hero_therapist_desk_1793885189565.jpg";

export const Hero: React.FC = () => {
  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div
        className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center"
        style={{ maxWidth: "var(--max-content-width)" }}
      >
        {/* Copy Column (Left) */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="type-h1 text-[#24302B]">
            See what your AI scribe actually sends off your device
          </h1>

          <p
            className="type-body text-[#6B7268] max-w-[60ch]"
            style={{ textWrap: "pretty" }}
          >
            Independent, plain-English audits of &ldquo;local-only&rdquo; AI
            note tools — built for therapists and small practices without an IT
            department.
          </p>

          <div className="pt-2 max-w-[540px]">
            <EmailCaptureForm source="hero" />
          </div>

          <div className="pt-4 border-t border-[#E4DFD5]">
            <p className="type-small text-[#6B7268] flex items-start gap-2">
              <span className="text-[#1F6B4E] font-bold text-base leading-none mt-0.5">
                •
              </span>
              <span>
                Three class actions have hit AI scribes in the past 7 months —
                and a BAA won't stop a wiretap claim.
              </span>
            </p>
          </div>
        </div>

        {/* Visual Column (Right) */}
        <div className="lg:col-span-5">
          <div
            className="relative overflow-hidden w-full bg-[#FFFFFF]"
            style={{
              borderRadius: "var(--radius)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <img
              src={heroImg}
              alt="Overhead view of a therapist desk with laptop showing Local-Only Verified audit report card and phone in airplane mode"
              className="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
