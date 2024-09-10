import { Schema, model, Types } from 'mongoose'

const { ObjectId } = Types

const imagenSchema = new Schema({
  url: {
    type: String,
    required: false,
  },
}, { _id: false })

const room = new Schema({
  author: {
    type: ObjectId,
    required: false,
    ref: 'User'
  },
  nameRoom: {
    type: String,
    required: false,
  },
  region: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  telefono: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  latitud: {
    type: Number,
    required: false,
  },
  longitud: {
    type: Number,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  },
  manager: {
    type: ObjectId,
    ref:'User'
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  imagenes: [imagenSchema],
})

const Room = model('Room', room)

export default Room