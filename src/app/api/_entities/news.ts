import mongoose from "mongoose";

export interface INews {
  content: string;
  status: boolean;
  title: string;
  thumb: string;
  priority: number;
}

const newsSchema: mongoose.Schema<INews> = new mongoose.Schema<INews>({
  content: String,
  status: Boolean,
  title: String,
  thumb: String,
  priority: Number,
});

export const NewsModel: mongoose.Model<INews> =
  mongoose.models.News || mongoose.model<INews>("News", newsSchema);
