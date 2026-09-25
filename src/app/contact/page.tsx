"use client";

import { H1, H2, H3 } from "@/components/Typography";
import { useState } from "react";
import { businessData } from "@/config/businessData";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isDev = process.env.NODE_ENV === 'development';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="w-full px-5 md:px-10 pt-space-xl pb-space-xl">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-10 max-w-[1440px] mx-auto">
        
        {/* Left Column: Info */}
        <div className="col-span-4 md:col-span-5 flex flex-col gap-space-md">
          <div>
            <H1>Contact</H1>
            <p className="mt-space-sm text-lg">
              Heeft u plannen voor een complete badkamerrenovatie of tegelproject? Stuur ons de informatie die u al heeft. Foto&apos;s van de huidige situatie, globale afmetingen, en een plattegrond helpen om het eerste gesprek concreter te maken.
            </p>
          </div>
          
          <div className="font-space flex flex-col gap-4 text-sm tracking-wide">
            <div>
              <span className="text-[#666666] block mb-1">TELEFOON</span>
              {businessData.telephone ? (
                <a href={`tel:${businessData.telephone.replace(/\s+/g, '')}`} className="hover:underline">{businessData.telephone}</a>
              ) : isDev ? (
                <span className="text-gray-400">[TBD]</span>
              ) : null}
            </div>
            <div>
              <span className="text-[#666666] block mb-1">E-MAIL</span>
              {businessData.email ? (
                <a href={`mailto:${businessData.email}`} className="hover:underline">{businessData.email}</a>
              ) : isDev ? (
                <span className="text-gray-400">[TBD]</span>
              ) : null}
            </div>
            <div>
              <span className="text-[#666666] block mb-1">WHATSAPP</span>
              {businessData.telephone ? (
                <a href={`https://wa.me/${businessData.telephone.replace(/\D/g, '')}`} className="hover:underline" target="_blank" rel="noopener noreferrer">{businessData.telephone}</a>
              ) : isDev ? (
                <span className="text-gray-400">[TBD]</span>
              ) : null}
            </div>
            <div>
              <span className="text-[#666666] block mb-1">KVK</span>
              {businessData.taxID ? (
                <span>{businessData.taxID}</span>
              ) : isDev ? (
                <span className="text-gray-400">[TBD]</span>
              ) : null}
            </div>
            <div>
              <span className="text-[#666666] block mb-1">WERKGEBIED</span>
              <span>{businessData.areaServed}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="col-span-4 md:col-span-6 md:col-start-7 bg-[#F7F7F5] p-space-md md:p-10 border border-[#E5E5E5] w-full">
          {submitted ? (
            <div className="flex items-center justify-center h-full min-h-[400px]">
              <H3 className="text-center text-green-700">Bedankt voor uw aanvraag. We nemen spoedig contact met u op.</H3>
            </div>
          ) : (
            <>
              <H2 className="mb-space-md">Aanvraag</H2>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-space text-sm uppercase tracking-wide">Naam*</label>
                  <input type="text" id="name" required placeholder="Uw naam" className="bg-transparent border-b border-[#1A1A1A] py-2 outline-none focus:border-b-2" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-space text-sm uppercase tracking-wide">E-mailadres*</label>
                  <input type="email" id="email" required placeholder="naam@voorbeeld.nl" className="bg-transparent border-b border-[#1A1A1A] py-2 outline-none focus:border-b-2" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-space text-sm uppercase tracking-wide">Telefoonnummer</label>
                  <input type="tel" id="phone" placeholder="+31 6 1234 5678" className="bg-transparent border-b border-[#1A1A1A] py-2 outline-none focus:border-b-2" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="postcode" className="font-space text-sm uppercase tracking-wide">Postcode*</label>
                  <input type="text" id="postcode" required placeholder="1234 AB" className="bg-transparent border-b border-[#1A1A1A] py-2 outline-none focus:border-b-2" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="font-space text-sm uppercase tracking-wide">Type project*</label>
                  <select id="type" required className="bg-transparent border-b border-[#1A1A1A] py-2 outline-none focus:border-b-2 rounded-none appearance-none">
                    <option value="">Selecteer...</option>
                    <option value="complete">Complete badkamerrenovatie</option>
                    <option value="toilet">Toiletrenovatie</option>
                    <option value="tegelwerk">Tegelwerk</option>
                    <option value="xxl">Grootformaat / XXL</option>
                    <option value="mozaiek">Mozaïek</option>
                    <option value="natuursteen">Natuursteen</option>
                    <option value="parket">Keramisch parket</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="description" className="font-space text-sm uppercase tracking-wide">Korte omschrijving van uw project*</label>
                  <textarea id="description" required rows={4} placeholder="Vertel kort wat u wilt laten uitvoeren, wat de huidige situatie is en welke wensen u heeft." className="bg-transparent border-b border-[#1A1A1A] py-2 outline-none focus:border-b-2 resize-none"></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="file" className="font-space text-sm uppercase tracking-wide">Upload foto, referentie of plattegrond</label>
                  <input type="file" id="file" className="text-sm mt-2" />
                  <p className="text-xs text-[#666666]">Optioneel. Voeg indien mogelijk foto&apos;s of een plattegrond toe. Max. 10 MB per bestand.</p>
                </div>

                <div className="flex gap-3 items-start mt-4">
                  <input type="checkbox" id="privacy" required className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-[#666666]">
                    Ik geef toestemming om mijn gegevens te gebruiken om contact met mij op te nemen over deze aanvraag.
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting} className="mt-6 bg-[#1A1A1A] text-white px-8 py-4 font-space uppercase tracking-wider text-sm hover:bg-black transition-colors self-start disabled:opacity-50">
                  {isSubmitting ? "Bezig met versturen..." : "Aanvraag versturen"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
