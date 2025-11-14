import { SECTION_TYPE } from "@/utils/enum";
import mongoose from "mongoose";

export interface ITracking {
  adwordsId: string;
  adwordsLabel: string;
  uaTracking: string;
  ga4Tracking: string;
  metaId: string;
  conversionsToken: string;
  snapchatId: string;
  tiktokId: string;
  twitterId: string;
  omnisendTrackingCode: string;
  isShowSplash?: boolean;
  type: SECTION_TYPE;
}

const trackingSchema: mongoose.Schema<ITracking> =
  new mongoose.Schema<ITracking>({
    adwordsId: String,
    adwordsLabel: String,
    uaTracking: String,
    ga4Tracking: String,
    metaId: String,
    conversionsToken: String,
    snapchatId: String,
    tiktokId: String,
    twitterId: String,
    omnisendTrackingCode: String,
    isShowSplash: Boolean,
    type: String,
  });

export const TrackingModel: mongoose.Model<ITracking> =
  mongoose.models.Tracking ||
  mongoose.model<ITracking>("Tracking", trackingSchema);
