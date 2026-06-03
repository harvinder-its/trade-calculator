export type TradeVerdict = "fair" | "win" | "lose";

export interface TradeResult {
  verdict: TradeVerdict;
  percentageDiff: number;
  message: string;
  label: string;
}

export interface TradeInput {
  yourOffer: number;
  theirOffer: number;
  yourItemName?: string;
  theirItemName?: string;
}

/** Parse user input string to a positive number or null if invalid */
export function parseTradeValue(value: string): number | null {
  const trimmed = value.trim().replace(/,/g, "");
  if (!trimmed) return null;
  const num = Number(trimmed);
  if (!Number.isFinite(num) || num < 0) return null;
  return num;
}

/**
 * Compare two trade values and return verdict with percentage difference.
 * Percentage is relative to your offer: positive = you gain, negative = you lose.
 */
export function calculateTrade(input: TradeInput): TradeResult {
  const { yourOffer, theirOffer } = input;

  if (yourOffer === 0 && theirOffer === 0) {
    return {
      verdict: "fair",
      percentageDiff: 0,
      message: "Both offers are zero. Enter valid trade values.",
      label: "Fair Trade",
    };
  }

  if (yourOffer === 0) {
    return {
      verdict: "win",
      percentageDiff: 100,
      message: "You receive full value with nothing offered.",
      label: "You Win",
    };
  }

  const diff = theirOffer - yourOffer;
  const percentageDiff = (diff / yourOffer) * 100;
  const absPct = Math.abs(percentageDiff);

  // Within 2% considered fair
  const FAIR_THRESHOLD = 2;

  if (absPct <= FAIR_THRESHOLD) {
    return {
      verdict: "fair",
      percentageDiff,
      message:
        absPct < 0.01
          ? "This trade is perfectly balanced."
          : `This trade is roughly fair (${absPct.toFixed(1)}% difference).`,
      label: "Fair Trade",
    };
  }

  if (percentageDiff > 0) {
    return {
      verdict: "win",
      percentageDiff,
      message: `You gain ${absPct.toFixed(1)}% value in this trade.`,
      label: "You Win",
    };
  }

  return {
    verdict: "lose",
    percentageDiff,
    message: `You lose ${absPct.toFixed(1)}% value in this trade.`,
    label: "You Lose",
  };
}
