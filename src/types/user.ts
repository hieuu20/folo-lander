export enum UserType {
  FANS = "FANS",
  CREATOR = "CREATOR",
}

export interface IUser {
  createAt: string;
  createBy: string;
  updateAt: string;
  updateBy: string;
  email: string;
  referred_by: string;
  uvId: string;
  mainId: string;
  numberReferrals: number;
  point: number;
  userType: UserType;
}
