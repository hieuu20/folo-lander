import mongoose from 'mongoose'

export interface ICreatorIdol {
    _id: string
    img: string
    name: string
    userName: string
    priority: number
    isShow: boolean
}

const creatorIdolSchema: mongoose.Schema<ICreatorIdol> =
    new mongoose.Schema<ICreatorIdol>({
        img: String,
        name: String,
        userName: String,
        priority: Number,
        isShow: Boolean,
    })

export const CreatorIdolModel: mongoose.Model<ICreatorIdol> =
    mongoose.models.CreatorIdol ||
    mongoose.model('CreatorIdol', creatorIdolSchema)
