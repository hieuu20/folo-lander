import mongoose from "mongoose";

export interface IBusinessContact {
  _id: string;
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
  deletedAt: string;
  createAt: string;
  updateAt: string;
  isContacted: boolean;
}

const businessContactSchema: mongoose.Schema<IBusinessContact> =
  new mongoose.Schema<IBusinessContact>({
    email: String,
    businessType: String,
    businessName: String,
    contactName: String,
    country: String,
    location: String,
    phoneCode: String,
    phoneNumber: String,
    taxNumber: String,
    timeOfOperation: String,
    isContacted: Boolean,
    deletedAt: Date,
    createAt: Date,
    updateAt: Date,
  });

export const BusinessContactModel: mongoose.Model<IBusinessContact> =
  mongoose.models.BusinessContact ||
  mongoose.model("BusinessContact", businessContactSchema);
