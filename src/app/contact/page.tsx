"use client";

import { H1, H2, H3 } from "@/components/Typography";
import { useState, useRef } from "react";
import { businessData } from "@/config/businessData";
import type { Metadata } from 'next';
import Head from 'next/head';

export default function ContactPage() {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isDev = process.env.NODE_ENV === 'development';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  return (
    <main className="w-full px-5 md:px-10 pt-space-xl pb-space-xl">
      <title>Contact | Badkamerrenovatie & Tegelwerk Bespreken | SPPAT</title>
      <meta name="description" content="Bespreek uw badkamer- of tegelproject met SPPAT. Stuur uw wensen, foto’s en afmetingen en geef ons een eerste beeld van het project." />
      
      <div className="grid grid-cols-4 md:grid-cols-12 gap-10 max-w-[1440px] mx-auto">
        
        {/* Left Column: Info */}
        <div className="col-span-4 md:col-span-5 flex flex-col gap-space-md">
          <div>
            <H1>Uw Project Bespreken</H1>
            <p className="mt-space-sm text-lg font-inter text-[#1A1A1A]">
              Heeft u plannen voor een complete badkamerrenovatie of tegelproject? Stuur ons de informatie die u al heeft. Dat hoeft nog geen compleet bouwplan te zijn.
            </p>
            <p className="mt-space-sm text-lg font-inter text-[#1A1A1A]">
              Foto&apos;s van de huidige situatie, globale afmetingen, een plattegrond en voorbeelden van de gewenste stijl helpen om het eerste gesprek concreter te maken.
            </p>
          </div>
          
          <div>
            <H3 className="text-xl">Wat kunt u meesturen?</H3>
            <ul className="mt-space-sm font-inter text-[#1A1A1A] list-disc list-inside space-y-1">
              <li>foto&apos;s van de huidige ruimte;</li>
              <li>globale lengte- en breedtematen;</li>
              <li>plattegrond, indien beschikbaar;</li>
              <li>foto&apos;s of links van wat u mooi vindt;</li>
              <li>gewenst type tegel of formaat, indien al gekozen;</li>
              <li>korte uitleg van wat moet veranderen.</li>
            </ul>
          </div>

          <div className="font-space flex flex-col gap-4 text-sm tracking-wide mt-space-sm">
            <H3 className="text-xl font-inter capitalize mb-2">Direct contact</H3>
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
              <span className="text-[#666666] block mb-1">INSTAGRAM</span>
              <span>@sppat.nl</span>
            </div>
            <div>
              <span className="text-[#666666] block mb-1">WERKGEBIED</span>
              <span>Heel Nederland</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="col-span-4 md:col-span-6 md:col-start-7 bg-white p-space-md md:p-10 border border-[#E5E5E5] w-full">
          <H2 className="mb-space-md !text-[1.5rem] md:!text-[clamp(2rem,4vw,3.5rem)]">Contactformulier</H2>
          <form className="flex flex-col gap-6" action="/api/placeholder" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-space text-sm uppercase tracking-wide text-[#666666]">Naam*</label>
              <input type="text" id="name" required placeholder="Uw naam" className="bg-[#F7F7F5] border border-[#E5E5E5] px-4 py-3 outline-none focus:border-[#1A1A1A] transition-colors rounded-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-space text-sm uppercase tracking-wide text-[#666666]">E-mailadres*</label>
              <input type="email" id="email" required placeholder="naam@voorbeeld.nl" className="bg-[#F7F7F5] border border-[#E5E5E5] px-4 py-3 outline-none focus:border-[#1A1A1A] transition-colors rounded-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-space text-sm uppercase tracking-wide text-[#666666]">Telefoonnummer</label>
              <input type="tel" id="phone" placeholder="+31 6 1234 5678" className="bg-[#F7F7F5] border border-[#E5E5E5] px-4 py-3 outline-none focus:border-[#1A1A1A] transition-colors rounded-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="postcode" className="font-space text-sm uppercase tracking-wide text-[#666666]">Postcode*</label>
              <input type="text" id="postcode" required placeholder="1234 AB" className="bg-[#F7F7F5] border border-[#E5E5E5] px-4 py-3 outline-none focus:border-[#1A1A1A] transition-colors rounded-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="type" className="font-space text-sm uppercase tracking-wide text-[#666666]">Type project*</label>
              <select id="type" required className="bg-[#F7F7F5] border border-[#E5E5E5] px-4 py-3 outline-none focus:border-[#1A1A1A] transition-colors rounded-none appearance-none">
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
              <label htmlFor="description" className="font-space text-sm uppercase tracking-wide text-[#666666]">Korte omschrijving van uw project*</label>
              <textarea id="description" required rows={4} placeholder="Vertel kort wat u wilt laten uitvoeren, wat de huidige situatie is en welke wensen u heeft." className="bg-[#F7F7F5] border border-[#E5E5E5] px-4 py-3 outline-none focus:border-[#1A1A1A] transition-colors rounded-none resize-none"></textarea>
            </div>

            <div className="flex flex-col gap-2 relative">
              <span className="font-space text-sm uppercase tracking-wide text-[#666666]" id="upload-label">Upload foto, referentie of plattegrond</span>
              <label 
                htmlFor="file" 
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="mt-2 flex items-center justify-between cursor-pointer bg-[#F7F7F5] border border-[#E5E5E5] hover:border-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none transition-colors px-4 py-3 w-full"
                aria-labelledby="upload-label upload-hint"
              >
                <span className="text-[#1A1A1A] overflow-hidden text-ellipsis whitespace-nowrap">{fileName || "Bestand kiezen"}</span>
                <span className="bg-[#1A1A1A] text-white px-3 py-1 text-xs font-space uppercase tracking-wide">Selecteer</span>
              </label>
              <input 
                type="file" 
                id="file" 
                ref={fileInputRef}
                className="sr-only" 
                tabIndex={-1}
                aria-hidden="true"
                onChange={handleFileChange} 
              />
              <p id="upload-hint" className="text-xs text-[#666666]">Optioneel. Voeg indien mogelijk foto&apos;s of een plattegrond toe. Max. 10 MB per bestand.</p>
            </div>

            <div className="flex gap-3 items-start mt-4">
              <input type="checkbox" id="privacy" required className="mt-1 flex-shrink-0" />
              <label htmlFor="privacy" className="text-sm text-[#666666]">
                Ik geef toestemming om mijn gegevens te gebruiken om contact met mij op te nemen over deze aanvraag.
              </label>
            </div>

            <button type="submit" className="mt-6 bg-[#1A1A1A] text-white px-8 py-4 font-space uppercase tracking-wider text-sm hover:bg-black transition-colors self-start border border-[#1A1A1A]">
              Aanvraag versturen
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
