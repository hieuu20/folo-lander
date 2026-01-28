import { USER_TYPE_ENUM } from "@/utils";

export interface IUser {
  createAt: string;
  createBy: string;
  updateAt: string;
  updateBy: string;
  email: string;
  referred_by: string;
  referralCode: string;
  uvId: string;
  mainId: string;
  numberReferrals: number;
  point: number;
  totalpoint: number;
  userType: USER_TYPE_ENUM;
  _id: string;
  rank?: number
}
