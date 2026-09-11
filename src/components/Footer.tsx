import Link from "next/link";
import { GithubIcon, LinkedinIcon, XIcon } from "./ui/SocialIcons";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#work" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Ecommerce", href: "#services" },
      { label: "Portfolios", href: "#services" },
      { label: "Web Applications", href: "#services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-2">
            <Link href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-blue" />
              XLightHouse
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              A web development studio building fast, beautifully designed
              sites for ambitious businesses.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" aria-label="X (Twitter)" className="text-muted transition-colors hover:text-foreground">
                <XIcon className="h-[18px] w-[18px]" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-muted transition-colors hover:text-foreground">
                <GithubIcon className="h-[18px] w-[18px]" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted transition-colors hover:text-foreground">
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} XLightHouse. All rights reserved.</p>
          <Link href="mailto:hello@xlighthouse.dev" className="hover:text-foreground">
            hello@xlighthouse.dev
          </Link>
        </div>
      </div>
    </footer>
  );
}
