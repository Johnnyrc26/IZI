import 'dotenv/config'  
import fetch from 'node-fetch'  
import VQRoom from '../data/ValentinaQ.js' 
import mongoose from 'mongoose'  

const { API_VQ, MONGODB_URL } = process.env

const apiData = () => {
  mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log('Conexión exitosa a MongoDB')
    return fetch(API_VQ)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error de red al intentar conectar con la API')
    }
    return response.json()
  })
  .then(data => {
    const pois = data.data.pois

    const savePromises = pois.map(poi => {
      const hotel = new VQRoom({
        nombre: poi.nombre,
        direccion: poi.direccion,
        telefono: poi.telefono,
        url: poi.url,
        email: poi.email,
        latitud: poi.latitud,
        longitud: poi.longitud,
        facebook: poi.facebook,
        twitter: poi.twitter,
        instagram: poi.instagram,
        imagenes: poi.imagenes.map(imagen => ({
          url: imagen.url
        }))
      })

      return hotel.save()
    })

    return Promise.all(savePromises)
  })
  .then(() => {
    console.log('Datos guardados correctamente en la base de datos')
  })
  .catch(error => {
    console.error('Error al procesar los datos:', error)
  })
  .finally(() => {
    mongoose.connection.close()
  })
}

export default apiData