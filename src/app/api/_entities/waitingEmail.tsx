import mongoose from "mongoose";

export interface IWaitingEmail {
    email: string;
    createdAt: Date;
}

const waitingEmailSchema: mongoose.Schema<IWaitingEmail> =
    new mongoose.Schema<IWaitingEmail>({
        email: String,
        createdAt: Date,
    });

export const WaitingEmailModel: mongoose.Model<IWaitingEmail> =
    mongoose.models.WaitingEmail ||
    mongoose.model<IWaitingEmail>("WaitingEmail", waitingEmailSchema);
