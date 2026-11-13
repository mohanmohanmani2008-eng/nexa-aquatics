import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/businessConfig';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Breeds', href: '#breeds' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
];

export function Footer() {
  return (
    <footer className="bg-ocean-950 text-slate-300 border-t border-ocean-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            {BUSINESS_CONFIG.logoUrl && (
              <img
                src={BUSINESS_CONFIG.logoUrl}
                alt={`${BUSINESS_CONFIG.name} logo`}
                className="h-10 w-auto object-contain shrink-0"
              />
            )}
            <div>
              <p className="font-display text-lg font-bold text-white">
                {BUSINESS_CONFIG.name}
              </p>
              <p className="mt-0.5 text-sm text-slate-400">
                {BUSINESS_CONFIG.tagline}
              </p>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-white hover:text-cyan-300 tabular-nums transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-300" aria-hidden="true" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppLink('Hello, I would like to inquire about wholesale aquarium fish.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-ocean-950 bg-turquoise-500 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>
          <p>Wholesale &amp; retail ornamental freshwater fish supply and safe live transport.</p>
        </div>
      </div>
    </footer>
  );
}
