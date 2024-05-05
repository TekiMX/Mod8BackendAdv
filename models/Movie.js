// import mongoose
import mongoose from 'mongoose'

const genreEnum = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller']
// define schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String },
  genre: { type: String, required: true, enum: genreEnum }
})

// create model and export
