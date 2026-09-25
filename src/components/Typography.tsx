import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function H1({ children, className = "", id }: TypographyProps) {
  return (
    <h1
      id={id}
      className={`font-space text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] word-break-keep ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "", id }: TypographyProps) {
  return (
    <h2
      id={id}
      className={`font-space text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.02em] word-break-keep ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "", id }: TypographyProps) {
  return (
    <h3
      id={id}
      className={`font-space text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.2] tracking-[0em] word-break-keep ${className}`}
    >
      {children}
    </h3>
  );
}

export function Body({ children, className = "" }: TypographyProps) {
  return (
    <p className={`font-inter text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.6] ${className}`}>
      {children}
    </p>
  );
}

export function Meta({ children, className = "" }: TypographyProps) {
  return (
    <span className={`font-space text-[0.875rem] tracking-[0.05em] uppercase ${className}`}>
      {children}
    </span>
  );
}
