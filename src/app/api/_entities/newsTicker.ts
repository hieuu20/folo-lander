import mongoose from 'mongoose'

export interface INewsTicker {
    [x: string]: any
    link: string
    createAt?: Date
    photo: string
    status?: boolean
    priority: number
    name: string
    enable: boolean
}

const newsTickerSchema: mongoose.Schema<INewsTicker> =
    new mongoose.Schema<INewsTicker>({
        link: String,
        createAt: Date,
        photo: String,
        status: Boolean,
        priority: Number,
        name: String,
        enable: Boolean,
    })

export const NewsTickerModel: mongoose.Model<INewsTicker> =
    mongoose.models.NewsTicker || mongoose.model('NewsTicker', newsTickerSchema)
