"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  
  if (!pathname || pathname === "/") return null;
  
  const segments = pathname.split('/').filter(p => p !== '');
  
  // Format labels
  const formatLabel = (str: string) => str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const items = segments.map((segment, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    return { label: formatLabel(segment), href };
  });

  const mobileBack = items.length > 1 ? items[items.length - 2] : null;

  return (
    <nav aria-label="Breadcrumb" className="w-full max-w-[1440px] mx-auto px-5 lg:px-8 py-space-sm">
      {/* Desktop */}
      <ol className="hidden md:flex flex-wrap items-center gap-2 font-space text-[12px] uppercase tracking-widest text-[#1A1A1A] opacity-70">
        <li>
          <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span>/</span>
              {isLast ? (
                <span className="font-bold opacity-100 text-ellipsis overflow-hidden">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:opacity-100 transition-opacity text-ellipsis overflow-hidden">{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
      
      {/* Mobile */}
      <div className="flex md:hidden font-space text-[12px] uppercase tracking-widest text-[#1A1A1A] opacity-70">
        {mobileBack ? (
          <Link href={mobileBack.href} className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <span>←</span> {mobileBack.label}
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <span>←</span> Home
          </Link>
        )}
      </div>
    </nav>
  );
}
