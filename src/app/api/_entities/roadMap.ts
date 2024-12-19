import mongoose from 'mongoose'

export interface IRoadMap {
    [x: string]: any
    img: string
    title: string
    description: string
    status: boolean
    priority: number
}

const roadMapSchema: mongoose.Schema<IRoadMap> = new mongoose.Schema<IRoadMap>({
    img: String,
    title: String,
    description: String,
    status: Boolean,
    priority: Number,
})

export const RoadMapModel: mongoose.Model<IRoadMap> =
    mongoose.models.RoadMap || mongoose.model('RoadMap', roadMapSchema)
