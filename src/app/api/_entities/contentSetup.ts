import mongoose from "mongoose";

export interface IContentSetup {
  _id: string;
  img: string;
  title: string;
  subTitle: string;
  description: string;
  status: boolean;
  priority: number;
  sectionId: string;
}

const ContentSetupSchema: mongoose.Schema<IContentSetup> =
  new mongoose.Schema<IContentSetup>({
    img: String,
    status: Boolean,
    priority: Number,
    title: String,
    subTitle: String,
    sectionId: String,
    description: String,
  });

export const ContentSetupModel: mongoose.Model<IContentSetup> =
  mongoose.models.ContentSetup ||
  mongoose.model("ContentSetup", ContentSetupSchema);
