export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How does the trade calculator work?",
    answer:
      "Enter the total value of your offer and what you receive. Our calculator compares both amounts, calculates the percentage difference, and tells you if the trade is fair, favorable, or unfavorable for you.",
  },
  {
    question: "Is this calculator accurate?",
    answer:
      "The calculator uses the values you provide. Accuracy depends on using up-to-date market prices from trusted sources. We recommend cross-checking high-value trades on official marketplaces before completing them.",
  },
  {
    question: "Can I use this for Roblox trades?",
    answer:
      "Yes. Use Roblox item values from trading communities or RAP guides, enter both sides of the trade, and get an instant fairness result. It works for limiteds, accessories, and bundled trades.",
  },
  {
    question: "Can I evaluate sports card trades?",
    answer:
      "Absolutely. Enter card values based on recent sold listings or price guides. The calculator works for singles, lots, and graded cards across baseball, basketball, football, and more.",
  },
  {
    question: "Is this tool free?",
    answer:
      "Yes, Trade Value Calculator is 100% free with no signup required. Compare unlimited trades for gaming items, collectibles, skins, and cards anytime.",
  },
];
