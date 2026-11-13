import { useMemo, useState } from 'react';
import { MessageCircle, Plus, Check, Search } from 'lucide-react';
import { FISH_BREEDS, type BreedCategory, type FishBreed } from '../data/fishBreeds';
import { getWhatsAppLink } from '../data/businessConfig';
import { SafeFishImage } from './SafeFishImage';

interface BreedsSectionProps {
  selectedBreeds: string[];
  onToggleBreedInquiry: (breedName: string) => void;
}

const FILTER_OPTIONS: ('All' | BreedCategory)[] = [
  'All',
  'Livebearers',
  'Coldwater & Fancy',
];

export function BreedsSection({
  selectedBreeds,
  onToggleBreedInquiry,
}: BreedsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | BreedCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBreeds = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return FISH_BREEDS.filter((breed) => {
      const matchesCategory = activeCategory === 'All' || breed.category === activeCategory;
      const matchesQuery =
        !query ||
        breed.name.toLowerCase().includes(query) ||
        breed.scientificName.toLowerCase().includes(query) ||
        breed.shortDescription.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleSelectForForm = (breed: FishBreed) => {
    onToggleBreedInquiry(breed.name);
  };

  return (
    <section id="breeds" className="bg-white py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-ocean-600">Wholesale & Retail Stock Catalog</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ocean-950 [text-wrap:balance]">
              Available Ornamental Fish Breeds
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Browse our core freshwater varieties available for both wholesale bulk lots and
              retail orders. Contact us on WhatsApp or add breeds to your inquiry form for current
              rates and stock quantities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search breed..."
                aria-label="Search fish breeds"
                className="w-full sm:w-52 pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:bg-white"
              />
            </div>

            {/* Category Segmented Tabs */}
            <div
              role="tablist"
              aria-label="Filter breeds by category"
              className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
            >
              {FILTER_OPTIONS.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-ocean-950 shadow-sm'
                        : 'text-slate-600 hover:text-ocean-950'
                    }`}
                  >
                    {category === 'All' ? 'All Breeds' : category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Breeds Grid */}
        {filteredBreeds.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-10 text-center">
            <p className="text-base font-medium text-ocean-950">
              No breeds matched &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Try clearing your search or contact us on WhatsApp to ask about specific stock.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors cursor-pointer"
            >
              Show All Breeds
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredBreeds.map((breed) => {
              const isSelected = selectedBreeds.includes(breed.name);
              const whatsappOrderText = `Hello, I am interested in wholesale pricing and availability for ${breed.name} (${breed.scientificName}).`;

              return (
                <article
                  key={breed.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    {/* Genuine Fish Photo */}
                    <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-slate-200/70">
                      <SafeFishImage
                        src={breed.image}
                        alt={breed.imageAlt}
                        fallbackLabel={breed.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Clean Unboxed Metadata */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 mb-2">
                        <span className="italic">{breed.scientificName}</span>
                        <span aria-hidden="true">·</span>
                        <span>{breed.waterType}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-medium text-turquoise-600">
                          {breed.availability}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-ocean-950">
                        {breed.name}
                      </h3>

                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                        {breed.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Wholesale Price Placeholder & Actions */}
                  <div className="px-6 pb-6 pt-4 border-t border-slate-100 space-y-4">
                    <div>
                      <p className="font-mono text-sm font-semibold text-ocean-900 tabular-nums">
                        {breed.wholesalePrice}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {breed.minimumOrderNote}
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <a
                        href={getWhatsAppLink(whatsappOrderText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4 text-turquoise-500 shrink-0" aria-hidden="true" />
                        <span>Order on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleSelectForForm(breed)}
                        aria-pressed={isSelected}
                        title={
                          isSelected
                            ? `Remove ${breed.name} from inquiry form`
                            : `Add ${breed.name} to inquiry form`
                        }
                        className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-50 border-turquoise-600 text-ocean-950'
                            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-4 h-4 text-turquoise-600" aria-hidden="true" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" aria-hidden="true" />
                            <span>Inquire</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Selected Breeds Floating Bar -> Jump to Contact */}
        {selectedBreeds.length > 0 && (
          <div className="mt-8 p-4 sm:p-5 rounded-xl bg-ocean-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">
                Selected for Wholesale Inquiry ({selectedBreeds.length}):{' '}
                <span className="text-cyan-300 font-normal">
                  {selectedBreeds.join(', ')}
                </span>
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                These breeds are pre-filled in the inquiry form below.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-ocean-950 bg-turquoise-500 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Complete Inquiry Form
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
