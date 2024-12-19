import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  isShow: {
    type: "boolean",
  },
  isFinish: {
    type: "boolean",
  },
  createAt: Date,
});

export const RewardStatusModel =
  mongoose.models.RewardStatus || mongoose.model("RewardStatus", rewardSchema);
