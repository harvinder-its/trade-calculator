import { Calculator, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "mailto:contact@tradevaluecalculator.com" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "Email", href: "mailto:contact@tradevaluecalculator.com", icon: Mail },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-background/50 py-12 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-instagram text-white">
                <Calculator className="h-5 w-5" aria-hidden />
              </span>
              Trade Value Calculator
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              The free fair trade checker for gamers, collectors, and traders across
              Roblox, Rocket League, CS2, sports cards, and Pokemon.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <ul className="mt-3 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition hover:text-brand-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">Connect</h3>
              <ul className="mt-3 flex gap-3">
                {footerLinks.social.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition hover:border-brand-500/50 hover:text-brand-500"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {year} Trade Value Calculator. All rights reserved. Not affiliated
            with game publishers or marketplaces.
          </p>
        </div>
      </div>
    </footer>
  );
}
