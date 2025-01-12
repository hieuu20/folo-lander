import mongoose from "mongoose";

export interface IUSPManager {
  readonly _id: string;
  readonly title: string;
  readonly description: string;
  readonly options: [string];
  readonly createAt: string;
  readonly createBy: string;
  readonly updateAt: string;
  readonly updateBy: string;
  readonly enable: boolean;
  readonly type: string;
  readonly subTitle: string;
  readonly status: boolean;
  readonly priority: number;
  readonly sectionId: string;
  readonly img: string;
  readonly isShowButton: boolean;
  readonly buttonLabel: string;
  readonly buttonLink: string;
  readonly bg: string;
}

const uspManagerSchema: mongoose.Schema<IUSPManager> =
  new mongoose.Schema<IUSPManager>({
    title: String,
    description: String,
    options: [String],
    createAt: Date,
    createBy: String,
    updateAt: Date,
    updateBy: String,
    priority: Number,
    enable: Boolean,
    type: String,
    sectionId: String,
    img: String,
    subTitle: String,
    isShowButton: Boolean,
    buttonLabel: String,
    buttonLink: String,
    bg: String,
  });

export const USPManagerModel: mongoose.Model<IUSPManager> =
  mongoose.models.USPManager ||
  mongoose.model<IUSPManager>("USPManager", uspManagerSchema);
