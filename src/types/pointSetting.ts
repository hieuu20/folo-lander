import { Role } from "./role";
import { Social } from "./social";

export interface PointSetting {
  _id: string;
  socialId: string;
  roleId: string;
  point: number;
  createdAt: Date;
  updatedAt: Date;
  role?: Role;
  social?: Social;
}
