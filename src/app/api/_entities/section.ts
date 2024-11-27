import mongoose from "mongoose";
import { IUSPManager } from "./uspManager";

export interface ISection {
  _id: string;
  title: string;
  description: string;
  createAt: string;
  createBy: string;
  updateAt: string;
  updateBy: string;
  priority: number;
  enable: boolean;
  type: string;
  uspManager: IUSPManager[];
}

const sectionSchema: mongoose.Schema<ISection> = new mongoose.Schema<ISection>({
  title: String,
  description: String,
  createAt: Date,
  createBy: String,
  updateAt: Date,
  updateBy: String,
  priority: Number,
  enable: Boolean,
  type: String,
});

export const SectionModel: mongoose.Model<ISection> =
  mongoose.models.Section || mongoose.model<ISection>("Section", sectionSchema);
