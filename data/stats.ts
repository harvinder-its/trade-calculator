export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export const statsData: StatItem[] = [
  { value: 110, suffix: "K+", label: "Monthly Searches", prefix: "" },
  { value: 50, suffix: "K+", label: "Trades Calculated", prefix: "" },
  { value: 10, suffix: "+", label: "Gaming Communities", prefix: "" },
  { value: 99, suffix: "%", label: "User Satisfaction", prefix: "" },
];
