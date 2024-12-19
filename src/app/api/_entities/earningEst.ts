import mongoose from 'mongoose'

export interface IEarningEst {
    [x: string]: any
    followers: number
    monthlySubPriceFrom: number
    monthlySubPriceTo: number
    shopItemValueFrom: number
    shopItemValueTo: number
}

const earningEstSchema: mongoose.Schema<IEarningEst> =
    new mongoose.Schema<IEarningEst>({
        followers: Number,
        monthlySubPriceFrom: Number,
        monthlySubPriceTo: Number,
        shopItemValueFrom: Number,
        shopItemValueTo: Number,
    })

export const EarningEstModel: mongoose.Model<IEarningEst> =
    mongoose.models.EarningEst || mongoose.model('EarningEst', earningEstSchema)
