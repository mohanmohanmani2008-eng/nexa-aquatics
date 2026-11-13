import { MessageCircle } from 'lucide-react';
import { WHOLESALE_SERVICES } from '../data/fishBreeds';
import { getWhatsAppLink } from '../data/businessConfig';

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-ocean-600">Wholesale & Retail Capabilities</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ocean-950 [text-wrap:balance]">
              Wholesale & Retail Supply and Safe Live Fish Delivery
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Structured for both wholesale aquarium shops and retail hobbyists—from breed
              selection and flexible order sizing to oxygen-packed transportation.
            </p>
          </div>
          <a
            href={getWhatsAppLink('Hello, I would like to discuss wholesale fish delivery and bulk order options.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-ocean-950 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <MessageCircle className="w-4 h-4 text-turquoise-600" aria-hidden="true" />
            <span>Discuss Bulk Delivery</span>
          </a>
        </div>

        {/* Asymmetric Editorial Numbered Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {WHOLESALE_SERVICES.map((service, index) => {
            const isFeatured = index < 2;
            return (
              <div
                key={service.number}
                className={`${
                  isFeatured ? 'md:col-span-3' : 'md:col-span-2'
                } bg-white rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-sm font-semibold text-turquoise-600 tabular-nums">
                      {service.number}
                    </span>
                    <span className="text-xs text-slate-500">{service.detail}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ocean-950">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {service.description}
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
