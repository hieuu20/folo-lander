import { Role } from "./role";

export interface IWaitingEmail {
    _id: string;
    email: string;
    createdAt: string;
    roleId: string;
    userId: string;

    role?: Role
}