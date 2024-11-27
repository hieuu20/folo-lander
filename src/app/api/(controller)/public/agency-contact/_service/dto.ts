import { IAgencyContact } from "@/app/api/_entities";

export interface CreateAgencyContactDto {
    email: string;
    name: string;
    contactName: string;
    country: string;
    location: string;
    phoneCode: string;
    phoneNumber: string;
    taxNumber: string;
    timeOfOperation: string;
    numberOfAgencies: string;
    isAccept: boolean;
}

export interface CreateAgencyContactResponse {
    success: boolean;
    data: IAgencyContact;
    message?: string;
}