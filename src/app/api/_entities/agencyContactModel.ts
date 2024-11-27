import mongoose from "mongoose";

export interface IAgencyContact {
  _id: string;
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
  deletedAt: string;
  createAt: string;
  updateAt: string;
  isContacted: boolean;
}

const agencyContactSchema: mongoose.Schema<IAgencyContact> =
  new mongoose.Schema<IAgencyContact>({
    email: String,
    name: String,
    contactName: String,
    country: String,
    location: String,
    phoneCode: String,
    phoneNumber: String,
    taxNumber: String,
    timeOfOperation: String,
    numberOfAgencies: String,
    isContacted: Boolean,
    deletedAt: Date,
    createAt: Date,
    updateAt: Date,
  });

export const AgencyContactModel: mongoose.Model<IAgencyContact> =
  mongoose.models.AgencyContact ||
  mongoose.model("AgencyContact", agencyContactSchema);
