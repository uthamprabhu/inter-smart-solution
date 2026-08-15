import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Shows a "Coming Soon..." alert message
 * Used for features that are not yet implemented
 */
export function showComingSoon() {
  alert('Coming Soon...');
}
