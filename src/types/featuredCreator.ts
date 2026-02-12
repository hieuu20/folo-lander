export enum CreatorBadge {
    VERIFIED = 'VERIFIED',
    PRO = 'PRO',
}

export interface IFeaturedCreator {
    _id: string;
    priority: number;
    isActive: boolean;
    name: string;
    avatar: string;
    role: string;
    profileLink: string;
    badge: CreatorBadge;
}
