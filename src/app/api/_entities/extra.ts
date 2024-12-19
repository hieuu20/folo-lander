import mongoose from "mongoose";

const extraSchema = new mongoose.Schema({
  description: String,
  card1: {
    title: { type: String },
    content: { type: String },
    photo: { type: String },
  },
  card2: {
    title: { type: String },
    content: { type: String },
    photo: { type: String },
  },
  createAt: Date,
});

export const ExtraModel =
  mongoose.models.Extra || mongoose.model("Extra", extraSchema);
