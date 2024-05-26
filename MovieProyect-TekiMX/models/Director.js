// Import from mongoose
import mongoose from 'mongoose'

// define schema de mongoose
const directorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date },
  isActive: { type: Boolean, default: true }
}, { timestamps: true }) // timestamps: true add createdAt y updatedAt

// create model and export
const Director = mongoose.model('DirectorModel', directorSchema)

export default Director
