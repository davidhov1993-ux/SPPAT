export function BlueprintLine({ className = "", vertical = false }: { className?: string; vertical?: boolean }) {
  return (
    <div
      className={`bg-[#E5E5E5] ${vertical ? "w-[1px] h-full" : "h-[1px] w-full"} ${className}`}
      aria-hidden="true"
    />
  );
}
