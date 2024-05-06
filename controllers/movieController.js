// importing models to use
import Movie from '../models/Movie.js'
import Director from '../models/Director.js'

// create
const createMovie = async (req, res) => {
  try {
    const movieData = req.body

    // Validations
    if (!movieData.director) {
      return res.status(400).json({ msg: 'Director data is missing' })
    }
    if (!movieData) {
      return res.status(400).json({ msg: 'Body data is missing' })
    }
    if (!Array.isArray(movieData.director)) {
      return res.status(400).json({ msg: 'Director data should be an array' })
    }

// Create Director if doesn't exist 
    const 
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
