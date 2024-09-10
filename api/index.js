import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes.js'
import errorHandler from './handlers/errorHandler.js'
import logic from './logic/index.js'

const { MONGODB_URL, PORT } = process.env

mongoose.connect(MONGODB_URL)
  .then(() => {
    const api = express()

    api.use(cors())

    api.use(express.json())

    api.get('/', (_req, res) => res.send(''))

    api.use('/', router)

    api.use(errorHandler)

    api.listen(PORT, () => console.log(`API running on PORT ${PORT}`))

    logic.apiData();
    
  })
  .catch(error => console.error(error.message))