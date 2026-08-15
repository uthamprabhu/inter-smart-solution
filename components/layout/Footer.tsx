import Link from 'next/link';
import Image from 'next/image';
import { footerSections, socialLinks, footerLegalLinks } from '@/lib/data/footer-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy py-20 lg:py-35">
      <div className="container-responsive">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-10">
          {/* Services & Pages Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-medium leading-8 text-surface-light mb-8">{section.title}</h3>
              <ul className="space-y-8">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-normal leading-7 text-text-muted-light hover:text-surface-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-2xl font-medium leading-8 text-surface-light mb-8">Stay connected</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200 hover:opacity-70"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-base font-normal leading-7 text-surface-light text-center sm:text-left">
            © {currentYear} Intersmart Ltd. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            {footerLegalLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-2">
                <Link
                  href={link.href}
                  className="text-base font-normal leading-7 text-text-muted-light hover:text-surface-light transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {index < footerLegalLinks.length - 1 && (
                  <span className="text-text-muted-light">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
