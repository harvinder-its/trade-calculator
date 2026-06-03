import { Gamepad2, ShoppingBag, Store, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AffiliatePartner {
  name: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  accent: string;
}

export const affiliatePartners: AffiliatePartner[] = [
  {
    name: "Steam Market",
    description: "Browse CS2 skins and in-game items with live market prices.",
    cta: "View Marketplace",
    href: "https://steamcommunity.com/market/",
    icon: Gamepad2,
    accent: "from-accent-purple/20 to-accent-magenta/20",
  },
  {
    name: "TCGPlayer",
    description: "Compare Pokemon and sports card values from trusted sellers.",
    cta: "Check Card Prices",
    href: "https://www.tcgplayer.com/",
    icon: ShoppingBag,
    accent: "from-accent-purple/20 to-accent-pink/20",
  },
  {
    name: "Roblox Catalog",
    description: "Research limited items and accessory values before you trade.",
    cta: "Explore Catalog",
    href: "https://www.roblox.com/catalog",
    icon: Store,
    accent: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Rocket League Garage",
    description: "Find item values and connect with traders in the RL community.",
    cta: "Trade Items",
    href: "https://rocketleaguegarage.com/",
    icon: Zap,
    accent: "from-accent-orange/20 to-accent-yellow/20",
  },
];
