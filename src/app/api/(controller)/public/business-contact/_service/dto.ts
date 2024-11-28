import { IBusinessContact } from "@/app/api/_entities";

export interface CreateBusinessContactDto {
  businessType: string;
  businessName: string;
  email: string;
  contactName: string;
  country: string;
  location: string;
  phoneCode: string;
  phoneNumber: string;
  taxNumber: string;
  timeOfOperation: string;
  isAccept: boolean;
}

export interface CreateBusinessContactResponse {
  success: boolean;
  data: IBusinessContact;
  message?: string;
}
