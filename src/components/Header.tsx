import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/businessConfig';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Breeds', href: '#breeds' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const showCustomLogo = Boolean(BUSINESS_CONFIG.logoUrl) && !logoError;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Top-left Business Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-ocean-950 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-600 rounded-lg py-0.5"
            aria-label={`${BUSINESS_CONFIG.name} Home`}
          >
            {showCustomLogo ? (
              <>
                <img
                  src={BUSINESS_CONFIG.logoUrl}
                  alt={`${BUSINESS_CONFIG.name} logo`}
                  onError={() => setLogoError(true)}
                  className="h-11 sm:h-12 w-auto px-3 py-1.5 rounded-xl object-contain bg-gradient-to-r from-ocean-950 via-ocean-900 to-cyan-950 border border-ocean-800 ring-1 ring-cyan-400/25 shadow-md shadow-ocean-950/20 transition-transform duration-150 hover:scale-[1.02] shrink-0"
                />
                <span className="sr-only">{BUSINESS_CONFIG.shortName}</span>
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 shrink-0"
                  aria-hidden="true"
                >
                  <rect width="36" height="36" rx="8" fill="#062542" />
                  <path
                    d="M25.5 18C22.2 13.8 17.4 12.2 13.1 13.7C11.5 14.3 10.1 15.3 9 16.6L6 13.8V22.2L9 19.4C10.1 20.7 11.5 21.7 13.1 22.3C17.4 23.8 22.2 22.2 25.5 18Z"
                    fill="#14B8A6"
                  />
                  <path
                    d="M25.5 18C22.2 13.8 17.4 12.2 13.1 13.7C16.2 14.7 18.8 16.4 20.4 18C18.8 19.6 16.2 21.3 13.1 22.3C17.4 23.8 22.2 22.2 25.5 18Z"
                    fill="#FFFFFF"
                    fillOpacity="0.92"
                  />
                  <circle cx="21.2" cy="17.2" r="1.15" fill="#062542" />
                  <path
                    d="M7 26.5C10.5 25 14 28 18 26.5C22 25 25.5 28 29 26.5"
                    stroke="#38BDF8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-display text-lg font-bold tracking-tight text-ocean-950">
                  NEXA AQUATICS
                </span>
              </>
            )}
          </a>

          {/* Desktop Navigation Menu */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-600"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 text-slate-600 hover:text-ocean-900 transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-turquoise-600 after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-600 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink('Hello, I would like to inquire about wholesale aquarium fish.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ocean-600"
            >
              <MessageCircle className="w-4 h-4 text-turquoise-500" aria-hidden="true" />
              <span>WhatsApp Order</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-ocean-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-lg"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-3 text-base font-medium text-slate-700 hover:text-ocean-950 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <a
              href={getWhatsAppLink('Hello, I would like to inquire about wholesale aquarium fish.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-turquoise-500" aria-hidden="true" />
              <span>Contact on WhatsApp ({BUSINESS_CONFIG.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
