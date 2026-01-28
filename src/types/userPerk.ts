import { Perk } from "./perk";

export enum UserPerkType {
  CLAIM = "CLAIM",
  PURCHASE = "PURCHASE",
}

export interface UserPerk {
  userId: string;
  perkId: string;
  value: number;
  type: UserPerkType;
  perk: Perk;
  createdAt: string;
  updatedAt: string;
}
