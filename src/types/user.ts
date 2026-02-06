import { USER_TYPE_ENUM } from "@/utils";
import { UserSocial } from "./userSocial";
import { Role } from "./role";

export interface IUser {
  createAt: string;
  createBy: string;
  updateAt: string;
  updateBy: string;
  email: string;
  username: string;
  referred_by: string;
  referralCode: string;
  uvId: string;
  mainId: string;
  numberReferrals: number;
  point: number;
  totalpoint: number;
  userType: USER_TYPE_ENUM;
  _id: string;
  rank: number;
  userSocials: UserSocial[];
  role: Role;

  avatar: string;
  dob: string;
  location: string;
}

export interface EarningOverview {
  pointToday: number;
  numberOfFan: number;
  numberOfCreator: number;
}
