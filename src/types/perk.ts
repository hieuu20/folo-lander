export interface Perk {
  _id: string;
  priority: number;
  thumb: string;
  title: string;
  description: string;
  pointToClaim: number;
  priceToBuy: number;
  isActive: boolean;
  totalSold: number;
  createAt: string;
  updatedAt: Date;
}
