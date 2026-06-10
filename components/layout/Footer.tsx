"use client";

import { Calculator, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "mailto:contact@tradevaluecalculator.com" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com/tradevaluecalc", icon: Twitter },
    { label: "GitHub", href: "https://github.com/harvinder-its/trade-calculator", icon: Github },
    { label: "Email", href: "mailto:contact@tradevaluecalculator.com", icon: Mail },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-google-gray-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-semibold text-google-dark">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-google-blue text-white">
                <Calculator className="h-4 w-4" aria-hidden />
              </span>
              Trade Value Calculator
            </Link>
            <p className="mt-3 max-w-sm text-[14px] text-google-gray leading-relaxed">
              The free fair trade checker for gamers, collectors, and traders across
              Roblox, Rocket League, CS2, sports cards, and Pokemon.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-wider text-google-gray">Legal</h3>
              <ul className="mt-3 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-google-gray transition hover:text-google-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-wider text-google-gray">Connect</h3>
              <ul className="mt-3 flex gap-2">
                {footerLinks.social.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-google-gray-border text-google-gray transition hover:border-google-blue hover:text-google-blue hover:bg-google-blue-light"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-google-gray-border pt-8 text-center text-[13px] text-google-gray">
          <p>
            &copy; {year} Trade Value Calculator. All rights reserved. Not affiliated
            with game publishers or marketplaces.
          </p>
        </div>
      </div>
    </footer>
  );
}
