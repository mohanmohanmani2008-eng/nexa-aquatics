import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BreedsSection } from './components/BreedsSection';
import { ContactSection } from './components/ContactSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);

  const handleToggleBreedInquiry = (breedName: string) => {
    setSelectedBreeds((prev) =>
      prev.includes(breedName)
        ? prev.filter((item) => item !== breedName)
        : [...prev, breedName]
    );
  };

  const handleRemoveBreed = (breedName: string) => {
    setSelectedBreeds((prev) => prev.filter((item) => item !== breedName));
  };

  const handleClearBreeds = () => {
    setSelectedBreeds([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BreedsSection
          selectedBreeds={selectedBreeds}
          onToggleBreedInquiry={handleToggleBreedInquiry}
        />
        <ContactSection
          selectedBreeds={selectedBreeds}
          onRemoveBreed={handleRemoveBreed}
          onClearBreeds={handleClearBreeds}
        />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
