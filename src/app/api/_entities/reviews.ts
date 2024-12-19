import mongoose from "mongoose";

export interface IReviews {
  img: string;
  name: string;
  tagName: string;
  description: string;
  status: boolean;
  priority: number;
}

const reviewsSchema: mongoose.Schema<IReviews> = new mongoose.Schema<IReviews>({
  img: String,
  name: String,
  tagName: String,
  description: String,
  status: Boolean,
  priority: Number,
});

export const ReviewsModel: mongoose.Model<IReviews> =
  mongoose.models.Reviews || mongoose.model("Reviews", reviewsSchema);
