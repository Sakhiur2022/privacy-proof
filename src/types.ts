export type PricingTier = 'Directory (Free)' | 'Clinician Pro ($19/mo)' | 'Practice ($299/yr)';

export interface LeadSubmission {
  email: string;
  source: string;
  tier?: PricingTier;
  createdAt: string; // ISO date string or server timestamp
}
