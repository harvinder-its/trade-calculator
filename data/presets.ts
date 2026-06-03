export interface TradePreset {
  id: string;
  label: string;
  yourOffer: string;
  theirOffer: string;
  yourItemName: string;
  theirItemName: string;
}

/** Sample presets for quick testing and category buttons */
export const tradePresets: TradePreset[] = [
  {
    id: "roblox",
    label: "Roblox Trade",
    yourOffer: "45000",
    theirOffer: "52000",
    yourItemName: "Dominus Empyreus",
    theirItemName: "Valkyrie Helm + Adds",
  },
  {
    id: "rocket-league",
    label: "Rocket League Trade",
    yourOffer: "1200",
    theirOffer: "1350",
    yourItemName: "White Octane",
    theirItemName: "Black Dieci + Credits",
  },
  {
    id: "sports-card",
    label: "Sports Card Trade",
    yourOffer: "850",
    theirOffer: "920",
    yourItemName: "2020 Prizm Herbert RC",
    theirItemName: "2018 Optic Lamar RC",
  },
  {
    id: "cs2",
    label: "CS2 Skin Trade",
    yourOffer: "320",
    theirOffer: "385",
    yourItemName: "AK-47 Redline FT",
    theirItemName: "AWP Asiimov FT",
  },
  {
    id: "pokemon",
    label: "Pokemon Card Trade",
    yourOffer: "180",
    theirOffer: "165",
    yourItemName: "Charizard ex SAR",
    theirItemName: "Umbreon VMAX Alt",
  },
];

/** Default example from requirements: 5000 vs 5500 */
export const defaultSample = {
  yourOffer: "5000",
  theirOffer: "5500",
};
