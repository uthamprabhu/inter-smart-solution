export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Hyperparameter model tuning', href: '#hyperparameter' },
      { label: 'PoC of AI Solutions', href: '#poc' },
      { label: 'AI Model Optimization', href: '#optimization' },
      { label: 'AI Consultation', href: '#consultation' },
    ],
  },
  {
    title: 'Pages',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Technology', href: '#technology' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'virtual team', href: '#virtual-team' },
      { label: 'Contact us', href: '#contact' },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: '/icons/social/facebook.svg',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: '/icons/social/instagram.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: '/icons/social/linkedin.svg',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: '/icons/social/twitter.svg',
  },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'GDPR Policy', href: '#gdpr' },
  { label: 'Terms of Service', href: '#terms' },
];
