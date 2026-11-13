import { ArrowRight, MessageCircle, ShieldCheck, Truck, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/businessConfig';
import { SafeFishImage } from './SafeFishImage';

const HERO_BENEFITS = [
  {
    icon: Layers,
    title: 'Popular Ornamental Breeds',
    description:
      'Consistent availability of Guppy, Molly, and Goldfish stock conditioned for wholesale stores and retail buyers.',
  },
  {
    icon: ShieldCheck,
    title: 'Wholesale & Retail Supply',
    description:
      'Competitive bulk trade rates for aquarium shops alongside convenient retail supply and prompt WhatsApp quotes.',
  },
  {
    icon: Truck,
    title: 'Oxygen-Packed Delivery',
    description:
      'Careful double-bagged oxygen sealing and insulated transport cartons for safe regional arrival.',
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-ocean-950 text-white">
      {/* Underwater Beach Reef & Fishes Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <SafeFishImage
          src="/images/hero-underwater-bg.jpg"
          alt="Clear turquoise coastal underwater reef with schooling tropical fish"
          priority
          fallbackLabel="Underwater Reef & Fish Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-950/70 to-ocean-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/85 via-transparent to-ocean-950/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center py-2"
          >
            <p className="text-sm font-medium text-cyan-300 tracking-normal mb-3">
              {BUSINESS_CONFIG.tagline}
            </p>
            <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-white [text-wrap:balance]">
              NEXA AQUATICS
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl">
              Reliable wholesale and retail ornamental aquarium fish supply for pet shops,
              bulk buyers, and hobbyists. Order healthy Guppy, Molly, and Goldfish stock backed by
              safe oxygen-sealed packaging and scheduled delivery.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#breeds"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-ocean-950 bg-turquoise-500 hover:bg-cyan-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-950 focus-visible:ring-cyan-300"
              >
                <span>Explore Fish Breeds</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={getWhatsAppLink('Hello NEXA AQUATICS, I would like to inquire about wholesale and retail aquarium fish pricing and availability.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-ocean-900/85 hover:bg-ocean-800 border border-cyan-300/35 backdrop-blur-sm rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-950 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 text-cyan-300" aria-hidden="true" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200">
              <span>
                Direct Order Line:{' '}
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="font-mono font-semibold text-white hover:text-cyan-300 tabular-nums transition-colors"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </span>
              <span aria-hidden="true" className="text-white/35">
                ·
              </span>
              <span>Wholesale & Retail Supply</span>
              <span aria-hidden="true" className="text-white/35">
                ·
              </span>
              <span>Oxygen-Sealed Transit Packaging</span>
            </div>
          </motion.div>

          {/* Hero Genuine Aquarium Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative rounded-xl overflow-hidden border border-white/20 bg-ocean-900/80 min-h-[280px] sm:min-h-[360px] shadow-xl"
          >
            <SafeFishImage
              src="/images/hero-fullmoon-guppy.jpg"
              alt="Fancy full-tail Cobra Guppy fish (Poecilia reticulata) in a freshwater aquarium"
              priority
              fallbackLabel="Fancy Guppy Ornamental Stock"
              className="w-full h-full lg:h-full object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/45 to-transparent p-5 sm:p-6"
              aria-hidden="true"
            >
              <p className="text-xs font-medium text-cyan-200">
                Fancy Guppy &amp; Ornamental Stock · Wholesale &amp; Retail Dispatch
              </p>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 3-Column Highlights Strip Below Hero */}
        <div className="mt-10 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HERO_BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-ocean-950/75 backdrop-blur-sm border border-white/15"
              >
                <div className="p-2.5 rounded-lg bg-ocean-800/90 text-cyan-300 shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
