import 'dotenv/config'
import logic from '../logic/index.js'
import {SystemError} from 'com/errors.js'


const apiDataHandler = (req, res, next) => {
  logic.apiData()
    .then(data => {
    res.status(200).json(data)
    })
    .catch(error => {
    next(new SystemError(error.message))
  })
}

export default apiDataHandler