// #1 importar mongoose
import mongoose from 'mongoose'

const genreEnum = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Musicals', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'Western']
// #2 definir un esquema
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true }], // ObjectID es un tipo de  dato utilizado por Mongoose para identificar documentos en MongoDb. ref: 'Author' indica que el campo authors se relaciona con el modelo Author
  publishDate: { type: Date }, // YYYY-MM-DD
  length: { type: Number, required: true },
  score: { type: Number, required: true },
  genre: { type: String, required: true, enum: genreEnum },
  isActive: { type: Boolean, default: true }
}, { timestamps: true }) // timestamps: true agrega createdAt y updatedAt

// #3 Crear el modelo y exportarlo
const Movie = mongoose.model('Movie', movieSchema)
export default Movie
