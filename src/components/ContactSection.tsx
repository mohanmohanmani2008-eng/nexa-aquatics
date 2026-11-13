import { useState, useEffect, type FormEvent } from 'react';
import { Phone, MessageCircle, CheckCircle2, X } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/businessConfig';

interface ContactSectionProps {
  selectedBreeds: string[];
  onRemoveBreed: (breedName: string) => void;
  onClearBreeds: () => void;
}

export function ContactSection({
  selectedBreeds,
  onRemoveBreed,
  onClearBreeds,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    message: string;
    breeds: string[];
  } | null>(null);

  useEffect(() => {
    if (selectedBreeds.length > 0 && !message.trim()) {
      setMessage(
        `Hello, please share wholesale prices and bulk availability for: ${selectedBreeds.join(', ')}.`
      );
    }
  }, [selectedBreeds, message]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMessage('Please enter your name or store name.');
      return;
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }

    if (trimmedMessage.length < 5) {
      setErrorMessage('Please enter a short message with your wholesale requirements.');
      return;
    }

    setSubmittedData({
      name: trimmedName,
      phone: trimmedPhone,
      message: trimmedMessage,
      breeds: [...selectedBreeds],
    });
    setName('');
    setPhone('');
    setMessage('');
    onClearBreeds();
  };

  const buildWhatsAppPayload = (data: {
    name: string;
    phone: string;
    message: string;
    breeds: string[];
  }) => {
    const lines = [
      `Wholesale Inquiry from ${data.name}`,
      `Contact Number: ${data.phone}`,
    ];
    if (data.breeds.length > 0) {
      lines.push(`Breeds Interested In: ${data.breeds.join(', ')}`);
    }
    lines.push(`Message: ${data.message}`);
    return getWhatsAppLink(lines.join('\n'));
  };

  return (
    <section id="contact" className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct WhatsApp & Phone Contact */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-ocean-600">Wholesale & Retail Order Desk</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ocean-950 [text-wrap:balance]">
              Contact & Order Inquiries
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Reach out directly on WhatsApp or call us for wholesale bulk pricing, retail stock
              availability, and delivery scheduling.
            </p>

            {/* Prominent Phone / WhatsApp Card */}
            <div className="mt-8 rounded-xl bg-ocean-950 text-white p-6 sm:p-7 border border-ocean-800">
              <p className="text-xs font-medium text-cyan-300">
                WhatsApp & Phone Order Line
              </p>
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="mt-2 block font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white hover:text-cyan-300 tabular-nums transition-colors"
              >
                {BUSINESS_CONFIG.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-slate-300">
                Tap below to open a direct WhatsApp chat for quick wholesale and retail quotes.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink('Hello NEXA AQUATICS, I would like to place a wholesale or retail aquarium fish inquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-ocean-950 bg-turquoise-500 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-ocean-800 hover:bg-ocean-700 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-cyan-300 shrink-0" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-ocean-950">
                Send an Order Inquiry
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Share your name, phone number, and required breeds or quantities.
              </p>

              {selectedBreeds.length > 0 && !submittedData && (
                <div className="mt-5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xs font-medium text-slate-600 mb-2">
                    Selected Fish Breeds:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedBreeds.map((breed) => (
                      <button
                        key={breed}
                        type="button"
                        onClick={() => onRemoveBreed(breed)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-white border border-slate-300 text-ocean-950 rounded-md hover:bg-slate-100 cursor-pointer"
                      >
                        <span>{breed}</span>
                        <X className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {submittedData ? (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-teal-200 bg-teal-50/70 p-6 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-turquoise-600 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-display text-lg font-semibold text-ocean-950">
                        Inquiry Prepared for {submittedData.name}
                      </h4>
                      <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                        Thank you. To send this inquiry directly to our wholesale desk on{' '}
                        <span className="font-mono font-semibold tabular-nums">
                          {BUSINESS_CONFIG.phoneDisplay}
                        </span>
                        , click the WhatsApp button below.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-slate-200 p-4 text-sm text-slate-700 space-y-1">
                    <p>
                      <span className="font-medium text-ocean-950">Name:</span>{' '}
                      {submittedData.name}
                    </p>
                    <p>
                      <span className="font-medium text-ocean-950">Phone:</span>{' '}
                      <span className="font-mono tabular-nums">{submittedData.phone}</span>
                    </p>
                    {submittedData.breeds.length > 0 && (
                      <p>
                        <span className="font-medium text-ocean-950">Breeds:</span>{' '}
                        {submittedData.breeds.join(', ')}
                      </p>
                    )}
                    <p>
                      <span className="font-medium text-ocean-950">Message:</span>{' '}
                      {submittedData.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={buildWhatsAppPayload(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-turquoise-500" aria-hidden="true" />
                      <span>Send Inquiry via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-ocean-950 bg-white border border-slate-300 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-sm text-rose-800"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-ocean-950 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name or aquarium shop"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-ocean-950 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile / WhatsApp"
                        className="w-full px-3.5 py-2.5 text-sm font-mono bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:font-sans placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-ocean-950 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify the fish breeds, estimated quantities, and delivery city..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:bg-white resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-ocean-900 hover:bg-ocean-800 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                    <span className="text-xs text-slate-500">
                      Direct WhatsApp support:{' '}
                      <span className="font-mono font-medium text-ocean-950 tabular-nums">
                        {BUSINESS_CONFIG.phoneDisplay}
                      </span>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
