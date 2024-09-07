import 'dotenv/config'
import logic from '../logic/index.js'
import { SystemError } from 'com/errors.js'

const getAllApiDataHandler = (req, res, next) => {
  logic.getAllApiData()
    .then(hotels => {
    res.status(200).json(hotels)
    })
    .catch(error => {
    next(new SystemError(error.message))
  })
}

export default getAllApiDataHandler