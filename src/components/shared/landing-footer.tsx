import Link from "next/link"
import { Logo } from "./logo"
import { landingNavLinks } from "@/config/nav.config"

export function LandingFooter() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="section-padding-x py-12 grid gap-8 md:grid-cols-4">
        {/* Brand Column */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-sm mt-2">
            We design and build premium web applications that ship fast and scale infinitely.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Navigation</h4>
          <ul className="space-y-2">
            {landingNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:hello@solvevo.com" className="transition-colors hover:text-primary">
                hello@solvevo.com
              </a>
            </li>
            <li>
              <a href="https://github.com/solvevo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/solvevo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        <div className="section-padding-x flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Solvevo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
