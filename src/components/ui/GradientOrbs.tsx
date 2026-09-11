export function GradientOrbs({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="animate-float-a absolute -top-24 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-violet/30 blur-3xl" />
      <div className="animate-float-b absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-brand-blue/25 blur-3xl" />
      <div className="animate-float-c absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-brand-pink/20 blur-3xl" />
    </div>
  );
}
