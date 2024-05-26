// #1 import mongoose
import mongoose from 'mongoose'

// #2 define schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  curp: { type: String },
  role: { type: String },
  email: { type: String, lowercase: true },
  phone: { type: Number },
  birthDate: { type: Date }, // YYYY-MM-DD
  username: { type: String },
  password: { type: String },
  isActive: { type: Boolean, default: true }
}, { timestamps: true }) // timestamps: true agrega createdAt y updatedAt

// #3 Create model and export it
const User = mongoose.model('User', userSchema)

export default User
