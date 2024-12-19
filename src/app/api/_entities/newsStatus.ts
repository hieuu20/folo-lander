import mongoose from "mongoose";

export interface INewsStatus {
  isShow: boolean;
  createdAt: Date;
}

const newsStatusSchema: mongoose.Schema<INewsStatus> =
  new mongoose.Schema<INewsStatus>({
    isShow: Boolean,
    createdAt: Date,
  });

export const NewsStatusModel: mongoose.Model<INewsStatus> =
  mongoose.models.NewsStatus || mongoose.model("NewsStatus", newsStatusSchema);
