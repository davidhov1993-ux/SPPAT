import Link from "next/link";
import { businessData } from "@/config/businessData";

export function Footer() {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <footer className="border-t border-[#E5E5E5] bg-[#F7F7F5] pt-space-lg pb-space-md mt-auto">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-8">
          {/* SPPAT Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-space text-[14px] uppercase tracking-[0.05em] font-bold mb-2">SPPAT</h3>
            <p className="font-inter text-body leading-[1.6]">
              Complete badkamerrenovaties en professioneel tegelwerk in heel Nederland.
            </p>
            <div className="font-inter text-body leading-[1.6] flex flex-col gap-1 mt-2">
              {businessData.telephone ? (
                <a href={`tel:${businessData.telephone.replace(/\s+/g, '')}`} className="hover:underline">Telefoon: {businessData.telephone}</a>
              ) : isDev ? (
                <span className="text-gray-400">[Telefoon: TBD]</span>
              ) : null}
              
              {businessData.email ? (
                <a href={`mailto:${businessData.email}`} className="hover:underline">E-mail: {businessData.email}</a>
              ) : isDev ? (
                <span className="text-gray-400">[E-mail: TBD]</span>
              ) : null}
              
              {businessData.taxID ? (
                <span>KvK: {businessData.taxID}</span>
              ) : isDev ? (
                <span className="text-gray-400">[KvK: TBD]</span>
              ) : null}
              
              {businessData.vatID ? (
                <span>BTW: {businessData.vatID}</span>
              ) : isDev ? (
                <span className="text-gray-400">[BTW: TBD]</span>
              ) : null}
            </div>
          </div>

          {/* Diensten */}
          <div className="flex flex-col gap-4">
            <h3 className="font-space text-[14px] uppercase tracking-[0.05em] font-bold mb-2">Badkamers</h3>
            <div className="flex flex-col gap-3 font-inter text-body leading-[1.6]">
              <Link href="/complete-badkamer-renovatie/" className="hover:underline">Complete badkamerrenovatie</Link>
              <Link href="/complete-badkamer-renovatie/#toiletrenovatie" className="hover:underline">Complete toiletrenovatie</Link>
              <Link href="/complete-badkamer-renovatie/almere/" className="hover:underline">Badkamerrenovatie Almere</Link>
            </div>
          </div>

          {/* Tegelwerk */}
          <div className="flex flex-col gap-4">
            <h3 className="font-space text-[14px] uppercase tracking-[0.05em] font-bold mb-2">Tegelwerk</h3>
            <div className="flex flex-col gap-3 font-inter text-body leading-[1.6]">
              <Link href="/tegelwerk/#vloertegels" className="hover:underline">Vloertegels leggen</Link>
              <Link href="/tegelwerk/#wandtegels" className="hover:underline">Wandtegels zetten</Link>
              <Link href="/tegelwerk/#keuken" className="hover:underline">Keuken tegelen</Link>
              <Link href="/tegelwerk/#balkon" className="hover:underline">Balkon tegelen</Link>
              <Link href="/tegelwerk/#badkamer" className="hover:underline">Badkamer tegelen</Link>
            </div>
          </div>

          {/* Specialisaties & Informatie */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-space text-[14px] uppercase tracking-[0.05em] font-bold mb-2">Specialisaties</h3>
              <div className="flex flex-col gap-3 font-inter text-body leading-[1.6]">
                <Link href="/specialisaties/#grootformaat" className="hover:underline">Grootformaat tegels</Link>
                <Link href="/specialisaties/#mozaiek" className="hover:underline">Mozaïek</Link>
                <Link href="/specialisaties/#natuursteen" className="hover:underline">Natuursteen</Link>
                <Link href="/specialisaties/#keramisch-parket" className="hover:underline">Keramisch parket</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-space text-[14px] uppercase tracking-[0.05em] font-bold mb-2">Informatie</h3>
              <div className="flex flex-col gap-3 font-inter text-body leading-[1.6]">
                <Link href="/projecten/" className="hover:underline">Projecten</Link>
                <Link href="/over-ons/" className="hover:underline">Over ons</Link>
                <Link href="/kennisbank/" className="hover:underline">Kennisbank</Link>
                <Link href="/contact/" className="hover:underline">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-lg pt-8 border-t border-[#E5E5E5]">
          <p className="font-inter text-[14px] text-gray-500">
            © SPPAT. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
