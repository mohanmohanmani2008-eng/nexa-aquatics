/**
 * Central Business Configuration
 * ---------------------------------------------------------------------------
 * Edit the values below to update your business name, phone number, WhatsApp
 * link, location address, and Google Maps embed URL across the entire site.
 */

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  /**
   * Optional path to your custom logo image placed in `/public/images/`
   * (e.g. '/images/logo.jpeg'). Leave empty "" to use the built-in SVG mark.
   */
  logoUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappUrl: string;
  aboutHeading: string;
  aboutParagraphs: string[];
  wholesaleHighlights: {
    title: string;
    description: string;
  }[];
  location: {
    heading: string;
    addressPlaceholder: string;
    cityRegionPlaceholder: string;
    coordinates: string;
    dispatchNote: string;
    /**
     * To enable an interactive Google Map, paste your Google Maps "Embed a map"
     * iframe `src` URL here (e.g. "https://www.google.com/maps/embed?pb=...").
     * Leave as empty string "" to display the clean address & directions card.
     */
    googleMapsEmbedUrl: string;
    /**
     * Direct Google Maps link for "Open in Google Maps" button.
     */
    googleMapsDirectUrl: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'NEXA AQUATICS',
  shortName: 'NEXA AQUATICS',
  tagline: 'Wholesale & Retail Ornamental Aquarium Fish Supply',
  logoUrl: '/images/nexa-logo.png',
  phoneDisplay: '8825775913',
  phoneHref: 'tel:+918825775913',
  whatsappNumber: '918825775913',
  whatsappUrl: 'https://wa.me/918825775913',
  aboutHeading: 'Dependable Wholesale & Retail Ornamental Fish Supply',
  aboutParagraphs: [
    'NEXA AQUATICS supplies healthy, active, and well-conditioned ornamental freshwater fish for both wholesale buyers (aquarium shops, pet stores, and dealers) and retail aquarium hobbyists.',
    'Every batch is carefully acclimated, inspected for vitality before dispatch, and packed using oxygen-filled transport bags to maintain water stability throughout transit. Our priority is consistent stock quality, fair wholesale and retail pricing, and clear communication from order inquiry to delivery.',
  ],
  wholesaleHighlights: [
    {
      title: 'Healthy Conditioned Stock',
      description:
        'Fish are held and observed in clean, filtered tanks prior to packing so wholesale and retail buyers receive strong, active stock.',
    },
    {
      title: 'Wholesale & Retail Pricing',
      description:
        'Competitive bulk rates for aquarium stores alongside accessible retail pricing for individual hobbyist orders.',
    },
    {
      title: 'Safe Oxygen-Packed Dispatch',
      description:
        'Double-layered poly bags, pure oxygen inflation, and insulated cartons protect live fish across local and regional routes.',
    },
  ],
  location: {
    heading: 'Visit or Coordinate Dispatch from Our Facility',
    addressPlaceholder: 'Kerala Kaori, Hosur - Denkanikottai Rd',
    cityRegionPlaceholder: 'Thandarai, Tamil Nadu 635110',
    coordinates: '12.588216,77.780422',
    dispatchNote:
      'Wholesale pickups, retail orders, and scheduled bulk dispatches are coordinated in advance. Contact 8825775913 on WhatsApp to confirm stock readiness before visiting.',
    googleMapsEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=77.772%2C12.581%2C77.788%2C12.595&layer=mapnik&marker=12.588216%2C77.780422',
    googleMapsDirectUrl:
      'https://www.google.com/maps/search/?api=1&query=12.588216,77.780422',
  },
};

export function getWhatsAppLink(customMessage?: string): string {
  if (!customMessage) {
    return BUSINESS_CONFIG.whatsappUrl;
  }
  return `${BUSINESS_CONFIG.whatsappUrl}?text=${encodeURIComponent(customMessage)}`;
}
