import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#F7F7F5] pt-space-lg pb-space-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-8">
          {/* SPPAT Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-space text-[14px] uppercase tracking-[0.05em] font-bold mb-2">SPPAT</h3>
            <p className="font-inter text-body leading-[1.6]">
              Complete badkamerrenovaties en professioneel tegelwerk in heel Nederland.
            </p>
            <div className="font-inter text-body leading-[1.6] flex flex-col gap-1 mt-2">
              <a href="tel:+31612345678" className="hover:underline">Telefoon: +31 6 1234 5678</a>
              <a href="mailto:info@sppat.nl" className="hover:underline">E-mail: info@sppat.nl</a>
              <a href="https://wa.me/31612345678" className="hover:underline">WhatsApp: +31 6 1234 5678</a>
              <span>Instagram: @sppat.nl</span>
              <span>KvK: 12345678</span>
              <span>BTW: NL000000000B00</span>
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
