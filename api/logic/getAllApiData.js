import { SystemError } from 'com/errors.js'
import { ValentinaQ } from '../data/index.js'

const getAllApiData = () => {
  return ValentinaQ.find().select('-__v')
    .catch(error => { throw new SystemError(error.message) })
    .then(hotels => {
      hotels.forEach(hotel => {
        hotel.id = hotel._id.toString()
        delete hotel._id
      })
      
      return hotels
  })
}

export default getAllApiData