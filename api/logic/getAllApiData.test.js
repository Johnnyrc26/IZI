import 'dotenv/config'
import mongoose from 'mongoose'

import getAllApiData from './getAllApiData.js'

const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL)
  .then(() => {
    try {
      getAllApiData()
        .then(hotels => console.log('hotels retried', hotels))
        .catch(error => console.error(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch(error => console.error(error))