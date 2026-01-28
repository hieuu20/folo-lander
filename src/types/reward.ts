export interface Reward {
  _id: string;
  name: string;
  icon: string;
  rank: number;
  isActive: boolean;
  leaderboardFrom: number;
  leaderboardTo: number;
  createAt: string;
  updatedAt: Date;
}
