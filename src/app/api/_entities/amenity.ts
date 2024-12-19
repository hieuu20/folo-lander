import mongoose from 'mongoose'

const amenitySchema = new mongoose.Schema({
    title: String,
    name: String,
    photo: String,
    link: String,
    content: String,
    createAt: Date,
    checkAt: Date,
    description: String,
})

export const AmenityModel =
    mongoose.models.Amenity || mongoose.model('Amenity', amenitySchema)
