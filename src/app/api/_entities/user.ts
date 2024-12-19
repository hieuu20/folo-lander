import mongoose, { Document } from 'mongoose'
import moment from 'moment'

export interface IUser {
    [x: string]: any
    _id: string
    firstName: string
    lastName: string
    email: string
    isAdmin: boolean
    referenceId: string
    rank: number
    photo: string
    createAt: string
    updateAt: string
    type: string
    mobile: string
    userID: string
    password: string
    unlockIds: [{ type: string; ref: 'Reward' }]
    areaPhone: string
    amount: number
    verifyAt: string
    isBan: boolean
    contactID: string
    referenced: number
    bannedAt: string
    isSharedFb: boolean
    isSharedRedis: boolean
    isSharedTwitter: boolean
    isSharedLinkIn: boolean
    isSharedTele: boolean
    isSharedMess: boolean
    isSharedEmail: boolean
    isSharedWhatsapp: boolean
    isSharedSms: boolean
    addAdminAt: string
    addAdminBy: string
    verifyCode: string
    forgotPassCode: string
    dateOfBirth: string | moment.Moment
    currentUrl?: string
    country?: string
    displayName?: string
    userName: string
    location: string
    gender: string
    updateBy: string
    status: string
    numberOfTimesDeleted: number
    numberOfTimesSwitchRole: number
    deletedAt: string
    mainId: string
    source: string
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema<IUser>({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        require: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    referenceId: String,
    rank: Number,
    photo: String,
    createAt: Date,
    updateAt: Date,
    type: String,
    mobile: String,
    userID: String,
    password: {
        type: String,
        require: true,
    },
    unlockIds: [
        {
            type: String,
            ref: 'Reward',
        },
    ],
    areaPhone: String,
    amount: Number,
    verifyAt: Date,
    isBan: Boolean,
    contactID: String,
    referenced: Number,
    bannedAt: Date,
    isSharedFb: Boolean,
    isSharedRedis: Boolean,
    isSharedTwitter: Boolean,
    isSharedLinkIn: Boolean,
    isSharedTele: Boolean,
    isSharedMess: Boolean,
    isSharedEmail: Boolean,
    isSharedWhatsapp: Boolean,
    isSharedSms: Boolean,
    addAdminAt: Date,
    addAdminBy: String,
    verifyCode: String,
    forgotPassCode: String,
    dateOfBirth: Date,
    country: String,
    displayName: String,
    userName: String,
    location: String,
    gender: String,
    updateBy: String,
    status: String,
    numberOfTimesDeleted: Number,
    numberOfTimesSwitchRole: Number,
    deletedAt: Date,
    mainId: String,
    source: String,
})

userSchema.index({
    '$**': 'text',
})

export const UserModel: mongoose.Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>('User', userSchema)
