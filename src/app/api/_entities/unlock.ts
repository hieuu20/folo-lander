import mongoose from 'mongoose'

export interface IUnlock {
    createAt: string
    updateAt: string
    updateBy: string
    createBy: string
    _id: string

    name: string
    point: number
    status: string
    title: string
    description: string
    photo: string
    priority: number
    eventId: string
}

const unlockSchema = new mongoose.Schema({
    createAt: Date,
    updateAt: Date,
    updateBy: String,
    createBy: String,

    name: String,
    point: Number,
    status: String,
    title: String,
    description: String,
    photo: String,
    priority: Number,
    eventId: String,
})

export const UnlockModel: mongoose.Model<IUnlock> =
    mongoose.models.Unlock || mongoose.model<IUnlock>('Unlock', unlockSchema)
