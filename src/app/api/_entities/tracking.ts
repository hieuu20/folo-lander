import mongoose from 'mongoose'

export interface ITracking {
    [x: string]: any
    adwordsId: String
    adwordsLabel: String
    uaTracking: String
    ga4Tracking: String
    metaId: String
    conversionsToken: String
    snapchatId: String
    tiktokId: String
    twitterId: String
    omnisendTrackingCode: String
    isShowSplash?: boolean
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
    })

export const TrackingModel: mongoose.Model<ITracking> =
    mongoose.models.Tracking ||
    mongoose.model<ITracking>('Tracking', trackingSchema)
