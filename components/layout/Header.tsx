'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Navigation links data - DRY principle
const NAV_LINKS = [
  { id: 'nav-services', label: 'Services', href: '#services' },
  { id: 'nav-solutions', label: 'Solutions', href: '#projects' },
  { id: 'nav-virtual-team', label: 'Virtual team', href: '#' },
  { id: 'nav-company', label: 'Company', href: '#process' },
  { id: 'nav-about', label: 'About us', href: '#' },
];

export default function Header() {
  // Always start with false to match SSR
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mark that user has scrolled (for showing navbar after refresh)
      if (!hasScrolledRef.current) {
        hasScrolledRef.current = true;
        setIsVisible(true);
      }
      
      // Determine if scrolled past threshold
      setIsScrolled(currentScrollY > 50);
      
      // Determine visibility based on scroll direction
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    // Check initial scroll position after paint
    const initialScrollY = window.scrollY;
    lastScrollYRef.current = initialScrollY;
    
    if (initialScrollY > 50) {
      // User refreshed while scrolled - hide navbar initially
      // Use RAF to avoid ESLint warning about setState in effect
      requestAnimationFrame(() => {
        setIsScrolled(true);
        setIsVisible(false);
      });
    } else {
      // At top - show navbar normally
      hasScrolledRef.current = true;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Reusable class generators - DRY principle
  const navLinkClasses = (mobile = false) =>
    `text-base font-medium leading-6 hover:opacity-70 transition-opacity duration-200 ${
      mobile ? 'py-2' : ''
    } ${isScrolled ? 'text-brand-navy' : 'text-surface-light'}`;

  const ctaButtonClasses = (mobile = false) =>
    `inline-flex px-6 py-2.5 rounded-full text-base font-medium leading-6 transition-all duration-300 ${
      mobile ? 'justify-center mt-2' : ''
    } ${
      isScrolled
        ? 'bg-brand-navy text-white hover:bg-brand-navy-dark'
        : 'bg-white text-brand-navy hover:bg-opacity-90'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className={`container-responsive transition-all duration-300 ${
        isScrolled ? 'pt-3 pb-2' : 'pt-6 lg:pt-8'
      }`}>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/navbar/intersmart-brand.svg"
              alt="Inter Smart"
              width={180}
              height={40}
              className={`transition-all duration-300 ${
                isScrolled ? 'h-8 lg:h-10 brightness-0' : 'h-8 lg:h-10 brightness-0 invert'
              }`}
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation + CTA Button grouped together */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={navLinkClasses()}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#contact"
              className={ctaButtonClasses()}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-brand-navy' : 'text-white'
            }`}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className={`container-responsive pb-6 shadow-lg transition-colors duration-300 ${
          isScrolled ? 'bg-white' : 'bg-[#020f46]'
        }`}>
          <div className="flex flex-col space-y-4 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={closeMobileMenu}
                className={navLinkClasses(true)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className={ctaButtonClasses(true)}
            >
              Get in touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
