import mongoose from "mongoose";

export interface IReward {
  createAt: string;
  updateAt: string;
  updateBy: string;
  createBy: string;
  _id: string;

  name: string;
  top: number;
  status: string;
  title: string;
  rankApplyStart: number;
  rankApplyEnd: number;
  rankColor: string;
  applyTimeValue: number;
  applyTimeUnit: string;
  userName: string;
  earlyAccess: string;
  freeCoin: number;
  description: string;
  photo: string;
  priority: number;
  eventId: string;
  freeUnlimited: string;
  freeProSubscription: string;
  freeProSubscriptionApplyTimeValue: number;
  freeProSubscriptionApplyTimeUnit: string;
}

const rewardSchema = new mongoose.Schema({
  createAt: Date,
  updateAt: Date,
  updateBy: String,
  createBy: String,

  name: String,
  top: Number,
  status: String,
  title: String,
  rankApplyStart: Number,
  rankApplyEnd: Number,
  rankColor: String,
  applyTimeValue: Number,
  applyTimeUnit: String,
  userName: String,
  earlyAccess: String,
  freeCoin: Number,
  description: String,
  photo: String,
  priority: Number,
  eventId: String,
  freeUnlimited: String,
  freeProSubscription: String,
  freeProSubscriptionApplyTimeValue: Number,
  freeProSubscriptionApplyTimeUnit: String,
});

export const RewardModel: mongoose.Model<IReward> =
  mongoose.models.Reward || mongoose.model<IReward>("Reward", rewardSchema);
