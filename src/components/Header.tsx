"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
        
        // Focus trap
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'a[href], button, textarea, input, select'
          );
          if (focusableElements.length === 0) return;
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement || document.activeElement === document.body) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const links = [
    { label: "Badkamers", href: "/complete-badkamer-renovatie/" },
    { label: "Tegelwerk", href: "/tegelwerk/" },
    { label: "Specialisaties", href: "/specialisaties/" },
    { label: "Projecten", href: "/projecten/" },
    { label: "Over ons", href: "/over-ons/" },
    { label: "Kennisbank", href: "/kennisbank/" },
    { label: "Contact", href: "/contact/" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      {/* Skip to content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-[#1A1A1A] focus:text-[#F7F7F5] z-[100]">
        Ga naar hoofdinhoud
      </a>
      
      <div className="max-w-[1440px] w-full mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-space font-bold uppercase tracking-[0.05em] text-[#1A1A1A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]">
          SPPAT
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => {
             const isActive = pathname === link.href || pathname.startsWith(link.href) && link.href !== '/';
             return (
               <Link
                 key={link.href}
                 href={link.href}
                 className={`font-space text-[14px] uppercase tracking-[0.05em] text-[#1A1A1A] hover:underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A] ${isActive ? 'underline' : ''}`}
               >
                 {link.label}
               </Link>
             );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6 text-[#1A1A1A]" />
        </button>
      </div>

      {/* Mobile Modal Nav */}
      {isOpen && (
        <div 
          id="mobile-menu"
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigatie menu"
          className="fixed inset-0 z-[100] bg-[#F7F7F5] flex flex-col p-5 overflow-y-auto"
        >
          <div className="flex justify-between items-center h-16 mb-8 shrink-0">
            <Link href="/" onClick={toggleMenu} className="font-space font-bold uppercase tracking-[0.05em] text-[#1A1A1A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]">
              SPPAT
            </Link>
            <button onClick={toggleMenu} className="p-2 -mr-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]" aria-label="Sluit menu">
              <X className="w-6 h-6 text-[#1A1A1A]" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((link) => {
               const isActive = pathname === link.href || pathname.startsWith(link.href) && link.href !== '/';
               return (
                 <Link
                   key={link.href}
                   href={link.href}
                   onClick={toggleMenu}
                   className={`font-space text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] word-break-keep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A] ${isActive ? 'underline decoration-1 underline-offset-4' : ''}`}
                 >
                   {link.label}
                 </Link>
               );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
