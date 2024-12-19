import mongoose from 'mongoose'

export interface INewsStatus {
    [x: string]: any
    isShow: Boolean
    createdAt: Date
}

const newsStatusSchema: mongoose.Schema<INewsStatus> =
    new mongoose.Schema<INewsStatus>({
        isShow: Boolean,
        createdAt: Date,
    })

export const NewsStatusModel: mongoose.Model<INewsStatus> =
    mongoose.models.NewsStatus || mongoose.model('NewsStatus', newsStatusSchema)
