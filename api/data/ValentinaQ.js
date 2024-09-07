import { Schema, model } from 'mongoose';

const imagenSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
}, { _id: false });

const roomSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
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
    required: true,
  },
  longitud: {
    type: Number,
    required: true,
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
  imagenes: [imagenSchema],
}, {
  timestamps: true,
});

const VQRoom = model('VQRoom', roomSchema);

export default VQRoom;