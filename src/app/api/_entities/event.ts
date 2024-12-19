import mongoose from 'mongoose'
import moment from 'moment'

export interface IEvent {
    createAt: string
    updateAt: string
    updateBy: string
    createBy: string
    _id: string

    name: string
    status: 'COMPLETED' | 'AVAILABLE' | 'PROGRESS'
    enable: boolean
    title: string
    endTime: string
    description: string
    images: string[]
    priority: number
    type: string
    showReward: boolean
    showUnlocked: boolean
}

const eventSchema: mongoose.Schema<IEvent> = new mongoose.Schema<IEvent>({
    createAt: Date,
    updateAt: Date,
    updateBy: String,
    createBy: String,

    name: String,
    status: String,
    enable: Boolean,
    title: String,
    endTime: Date,
    description: String,
    images: [
        {
            type: String,
            ref: 'event',
        },
    ],
    priority: Number,
    type: String,
    showReward: Boolean,
    showUnlocked: Boolean,
})

eventSchema.index({
    '$**': 'text',
})

export const EventModel: mongoose.Model<IEvent> =
    mongoose.models.Event || mongoose.model<IEvent>('Event', eventSchema)
