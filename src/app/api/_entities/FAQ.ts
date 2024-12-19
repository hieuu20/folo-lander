import mongoose from "mongoose";

export interface IFaq {
  answer: string;
  question: string;
  status: boolean;
  priority: number;
  type: string;
}

const FAQSchema: mongoose.Schema<IFaq> = new mongoose.Schema<IFaq>({
  answer: String,
  question: String,
  status: Boolean,
  priority: Number,
  type: String,
});

export const FAQModel: mongoose.Model<IFaq> =
  mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
