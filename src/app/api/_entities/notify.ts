import mongoose from 'mongoose'

export interface INotify {
    [x: string]: any
    image: string
    title: string
    description: string
}

const notifySchema: mongoose.Schema<INotify> = new mongoose.Schema<INotify>({
    image: String,
    title: String,
    description: String,
})

export const NotifyModel: mongoose.Model<INotify> =
    mongoose.models.Notify || mongoose.model<INotify>('Notify', notifySchema)
