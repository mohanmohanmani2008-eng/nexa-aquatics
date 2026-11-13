/**
 * Wholesale Fish Breeds Catalog
 * ---------------------------------------------------------------------------
 * How to add or update fish breeds:
 * 1. Add a new object to the `FISH_BREEDS` array below.
 * 2. Place your fish photo in `/public/images/` and set `image: '/images/your-photo.jpg'`.
 * 3. Update `wholesalePrice` (e.g. '₹18 / pc (Min. 100)') and `availability` anytime.
 */

export type BreedCategory = 'Livebearers' | 'Coldwater & Fancy' | 'Community Fish';

export type AvailabilityStatus = 'Available for Bulk Order' | 'In Stock' | 'Seasonal Stock' | 'Out of Stock';

export interface FishBreed {
  id: string;
  name: string;
  scientificName: string;
  category: BreedCategory;
  shortDescription: string;
  wholesalePrice: string;
  availability: AvailabilityStatus;
  minimumOrderNote: string;
  waterType: string;
  image: string;
  imageAlt: string;
}

export const FISH_BREEDS: FishBreed[] = [
  {
    id: 'guppy-fish',
    name: 'Guppy Fish',
    scientificName: 'Poecilia reticulata',
    category: 'Livebearers',
    shortDescription:
      'Hardy, fast-moving ornamental livebearers prized for vibrant tail patterns and easy care in community freshwater tanks.',
    wholesalePrice: 'Wholesale & Retail: Contact for Quote',
    availability: 'Available for Bulk Order',
    minimumOrderNote: 'Wholesale bulk packs & retail quantities available',
    waterType: 'Freshwater · Tropical',
    image: '/images/guppy.jpg',
    imageAlt: 'Colorful ornamental Guppy fish (Poecilia reticulata) swimming in an aquarium',
  },
  {
    id: 'molly-fish',
    name: 'Molly Fish',
    scientificName: 'Poecilia sphenops',
    category: 'Livebearers',
    shortDescription:
      'Active, peaceful aquarium favorites with sleek profiles and strong demand across retail pet stores and planted setups.',
    wholesalePrice: 'Wholesale & Retail: Contact for Quote',
    availability: 'Available for Bulk Order',
    minimumOrderNote: 'Wholesale bulk packs & retail quantities available',
    waterType: 'Freshwater · Peaceful',
    image: '/images/molly.jpg',
    imageAlt: 'Ornamental Molly fish (Poecilia sphenops) inside a clear aquarium',
  },
  {
    id: 'goldfish',
    name: 'Goldfish',
    scientificName: 'Carassius auratus',
    category: 'Coldwater & Fancy',
    shortDescription:
      'Classic coldwater ornamental fish with bright metallic orange coloration, strong resilience, and high year-round retail turnover.',
    wholesalePrice: 'Wholesale & Retail: Contact for Quote',
    availability: 'Available for Bulk Order',
    minimumOrderNote: 'Wholesale lots & individual retail orders available',
    waterType: 'Freshwater · Coldwater',
    image: '/images/goldfish.jpg',
    imageAlt: 'Bright orange Goldfish (Carassius auratus) swimming in a freshwater tank',
  },
];

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const WHOLESALE_SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Wholesale & Retail Aquarium Fish Supply',
    description:
      'Consistent supply of healthy ornamental freshwater breeds for aquarium shops, regional dealers, and retail aquarium hobbyists.',
    detail: 'Bulk dealer supply & retail store availability',
  },
  {
    number: '02',
    title: 'Fish Bulk Orders & Retail Packs',
    description:
      'Flexible order quantities tailored to your needs—whether stocking an entire retail shop or selecting fish for a personal tank.',
    detail: 'Custom breed assortments and lot sizing',
  },
  {
    number: '03',
    title: 'Fish Delivery Service',
    description:
      'Scheduled dispatch and transport coordination designed to move live ornamental stock smoothly from our holding tanks to your location.',
    detail: 'Timely local and regional delivery coordination',
  },
  {
    number: '04',
    title: 'Customer Order Assistance',
    description:
      'Direct phone and WhatsApp guidance on current stock availability, breed selection, order quantities, and acclimation care.',
    detail: 'Direct support on 8825775913 before and after dispatch',
  },
  {
    number: '05',
    title: 'Reliable Packaging and Safe Transportation',
    description:
      'Live fish are sealed in heavy-duty poly bags with pure oxygen, clean conditioned water, and protective outer cartons for safe travel.',
    detail: 'Oxygen-sealed, temperature-buffered transit prep',
  },
];
