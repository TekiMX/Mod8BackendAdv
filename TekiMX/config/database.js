import dotenv from 'dotenv'
import mongoose from 'mongoose'

// read enviromentt variables
dotenv.config()

const connect = () => {
  mongoose.connect(process.env.DB_CONNECT_URI) // conect to the database

  const { connection } = mongoose // bring connection to check if it works

  connection.once('open', () => {
    console.log('✅ Database connection stablished ⤴')
  })

  connection.on('error', (error) => {
    console.log('❌ database connecton error ❌', error)
  })
}

export { connect }
