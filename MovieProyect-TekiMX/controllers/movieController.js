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

    // Create Directors one by one and save them in DB

    const directorModel = await Promise.all(movieData.director.map(async director => {
      // search if author exists
      const existingDirector = await Director.findOne({ firstName: director.firstName, lastName: director.lastname, birthDate: director.birdDate })
      // if author exists, retrieve it
      if (existingDirector) {
        return existingDirector
      }
      // if Director doens't exist, create it
      const newDirector = new Director(director)
      return await Director.create(newDirector)
    }
    ))

    // Now than we save the Directors, we need to retrieve their ID to assing them to te movie

    movieData.director = directorModel.map(director => director.id)

    // Create movie Finally!!!
    const newMovie = await Movie.create(movieData)
    res.status(201).json(newMovie)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
