import React, { useState } from 'react';
import { saveLead } from '../lib/storage';

interface EmailCaptureFormProps {
  source: string;
  tier?: string;
  buttonText?: string;
  stacked?: boolean;
  onSuccess?: () => void;
}

export const EmailCaptureForm: React.FC<EmailCaptureFormProps> = ({
  source,
  tier,
  buttonText = 'Send me the first audit reports',
  stacked = false,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic email format check
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      await saveLead({
        email: trimmed,
        source,
        tier,
        honeypot,
      });
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      setError('Could not record your email. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="p-6 text-left"
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--card-shadow)',
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="space-y-2">
            <p className="type-body font-semibold text-[#24302B]">
              You're on the founding list.
            </p>
            <p className="type-body text-[#24302B]" style={{ textWrap: 'pretty' }}>
              The first audit report — with full airplane-mode results — lands in your inbox the day it publishes, and you'll get each new one after that. Want a specific tool tested? Reply to the welcome email and name it.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      {/* Honeypot field (hidden from real users, caught by bots) */}
      <div className="sr-only" aria-hidden="true" style={{ display: 'none' }}>
        <label htmlFor={`hp-${source}`}>Practice Website</label>
        <input
          id={`hp-${source}`}
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={`flex ${stacked ? 'flex-col' : 'flex-col sm:flex-row'} gap-3 w-full`}>
        <div className="flex-1 min-w-0">
          <label htmlFor={`email-${source}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${source}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourpractice.com"
            required
            className="w-full px-4 py-3.5 text-[16px] text-[#24302B] placeholder-[#6B7268] bg-[#FFFFFF] outline-none transition-colors"
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              fontFamily: 'var(--font-sans)',
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
          style={{
            minHeight: '48px',
          }}
        >
          {loading ? 'Submitting...' : buttonText}
        </button>
      </div>

      {error && (
        <p className="type-small text-[#B07A2A] font-medium">{error}</p>
      )}

      <p className="type-small text-[#6B7268]">
        We never sell or share your email. That would be a little ironic.
      </p>
    </form>
  );
};
