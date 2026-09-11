import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
        {children}
      </div>
      <div
        aria-hidden
        className="animate-marquee flex shrink-0 items-center gap-12 pr-12 group-hover:[animation-play-state:paused]"
      >
        {children}
      </div>
    </div>
  );
}
