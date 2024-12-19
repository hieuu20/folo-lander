import mongoose from "mongoose";

export interface IPlatform {
  photo: string;
  title: string;
  subTitle: string;
  description: string;
  status: boolean;
  link: string;
  priority: number;
}

const platformSchema: mongoose.Schema<IPlatform> =
  new mongoose.Schema<IPlatform>({
    photo: String,
    title: String,
    subTitle: String,
    description: String,
    status: Boolean,
    link: String,
    priority: Number,
  });

export const PlatformModel: mongoose.Model<IPlatform> =
  mongoose.models.Platform || mongoose.model("Platform", platformSchema);
