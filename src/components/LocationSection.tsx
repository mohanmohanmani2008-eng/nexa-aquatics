import { useState } from 'react';
import { MapPin, ExternalLink, MessageCircle, Copy, Check } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/businessConfig';

export function LocationSection() {
  const { location } = BUSINESS_CONFIG;
  const [copiedCoords, setCopiedCoords] = useState(false);
  const hasEmbedUrl = Boolean(location.googleMapsEmbedUrl.trim());
  const hasDirectUrl = Boolean(location.googleMapsDirectUrl.trim());

  const handleCopyCoordinates = async () => {
    try {
      await navigator.clipboard.writeText(location.coordinates);
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2000);
    } catch {
      // Clipboard fallback ignored if blocked in iframe
    }
  };

  return (
    <section id="location" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Address Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-sm font-semibold text-ocean-600">Location & Dispatch</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ocean-950 [text-wrap:balance]">
              {location.heading}
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {location.dispatchNote}
            </p>

            <div className="mt-7 p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-slate-500">
                    Business Address &amp; Location Pin
                  </p>
                  <p className="mt-1 text-sm font-medium text-ocean-950">
                    {location.addressPlaceholder}
                  </p>
                  <p className="text-sm text-slate-600">
                    {location.cityRegionPlaceholder}
                  </p>
                  {location.coordinates && (
                    <div className="mt-2.5 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-ocean-900 bg-white border border-slate-200 px-2.5 py-1 rounded-md tabular-nums">
                        {location.coordinates}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyCoordinates}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 hover:text-ocean-950 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                      >
                        {copiedCoords ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-turquoise-600" aria-hidden="true" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Copy Coordinates</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {hasDirectUrl ? (
                <a
                  href={location.googleMapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              ) : (
                <a
                  href={getWhatsAppLink('Hello, please share your wholesale fish farm location and pickup timings.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-turquoise-500" aria-hidden="true" />
                  <span>Request Location Pin on WhatsApp</span>
                </a>
              )}
              <a
                href={getWhatsAppLink('Hello NEXA AQUATICS, please share directions to your location (12.588216,77.780422).')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ocean-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-turquoise-600" aria-hidden="true" />
                <span>WhatsApp Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7">
            {hasEmbedUrl ? (
              <div className="w-full h-full min-h-[360px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col">
                <iframe
                  title={`${BUSINESS_CONFIG.name} Location Map (${location.coordinates})`}
                  src={location.googleMapsEmbedUrl}
                  className="w-full flex-1 min-h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4 text-xs text-slate-600">
                  <span className="font-mono tabular-nums">
                    Pin: {location.coordinates}
                  </span>
                  {hasDirectUrl && (
                    <a
                      href={location.googleMapsDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ocean-600 hover:text-ocean-900 inline-flex items-center gap-1"
                    >
                      <span>View Larger Map</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full h-full min-h-[340px] rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-cyan-50/50 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-ocean-900 text-cyan-300 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-ocean-950">
                  {BUSINESS_CONFIG.name}
                </h3>
                <p className="mt-2 text-base font-medium text-slate-800">
                  {location.addressPlaceholder}
                </p>
                <p className="text-sm text-slate-600">
                  {location.cityRegionPlaceholder}
                </p>
                {location.coordinates && (
                  <p className="mt-2 font-mono text-xs text-slate-500 tabular-nums">
                    Coordinates: {location.coordinates}
                  </p>
                )}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  {hasDirectUrl && (
                    <a
                      href={location.googleMapsDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={getWhatsAppLink('Hello NEXA AQUATICS, please share directions to your location in Thandarai.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-ocean-950 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-turquoise-600" aria-hidden="true" />
                    <span>WhatsApp for Pin</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
