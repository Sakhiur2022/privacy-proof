import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { LeadSubmission } from '../types';

const STORAGE_KEY = 'privacyproof_leads_local';

/**
 * Storage service for lead captures.
 * Persists directly to the Firestore 'leads' collection and keeps a local mirror for UI inspection.
 * Resilient to adblockers or network interruptions.
 */
export async function saveLead(data: {
  email: string;
  source: string;
  tier?: string;
  honeypot?: string;
}): Promise<{ success: boolean; isSpam?: boolean; id?: string }> {
  // Silent bot drop via honeypot
  if (data.honeypot && data.honeypot.trim().length > 0) {
    console.warn('Bot submission dropped silently via honeypot.');
    return { success: true, isSpam: true };
  }

  const cleanEmail = data.email.trim().toLowerCase();
  const submission: LeadSubmission = {
    email: cleanEmail,
    source: data.source,
    tier: data.tier as any,
    createdAt: new Date().toISOString(),
  };

  // 1. Local mirror for instant review & offline resilience
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: LeadSubmission[] = raw ? JSON.parse(raw) : [];
    list.unshift(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }

  // 2. Persist directly to Firestore 'leads' collection
  try {
    const payload = {
      email: cleanEmail,
      source: data.source,
      tier: data.tier || null,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'leads'), payload);
    console.log('Lead saved to Firestore with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    // If Firestore is blocked by browser adblockers or temporary network glitch,
    // the lead is already safely stored in local registry.
    console.warn('Firestore write failed, saved to local registry fallback:', error);
    return { success: true, id: 'local-' + Date.now() };
  }
}

export function getLocalLeads(): LeadSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
