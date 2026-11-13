import { CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { SafeFishImage } from './SafeFishImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Genuine Aquarium Facility Photography */}
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 min-h-[280px]">
            <SafeFishImage
              src="/images/about-guppy-group.jpg"
              alt="Group of colorful full-moon fancy Guppy fishes swimming together in an aquarium tank"
              fallbackLabel="Group of Fancy Guppy Fishes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Copy & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-semibold text-ocean-600 tracking-normal">
              About NEXA AQUATICS
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ocean-950 [text-wrap:balance]">
              {BUSINESS_CONFIG.aboutHeading}
            </h2>

            <div className="mt-5 space-y-4 text-base text-slate-600 leading-relaxed">
              {BUSINESS_CONFIG.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-slate-200">
              {BUSINESS_CONFIG.wholesaleHighlights.map((highlight) => (
                <div key={highlight.title} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-ocean-950">
                    <CheckCircle2 className="w-4 h-4 text-turquoise-600 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-sm font-semibold">{highlight.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
