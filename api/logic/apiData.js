import 'dotenv/config'
import fetch from 'node-fetch'
import { Room } from '../data/index.js'
import mongoose from 'mongoose'
import cron from 'node-cron'

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
        return Room.findOne({ nameRoom: poi.nombre })
          .then(existing => {
            if (existing) {
              console.log(`the hotel already exist ${poi.name}`)
              return null 
            }
            const hotel = new Room({
              nameRoom: poi.nombre,
              city: poi.direccion,
              telefono: poi.telefono,
              url: poi.url,
              email: poi.email,
              latitud: poi.latitud,
              longitud: poi.longitud,
              facebook: poi.facebook,
              twitter: poi.twitter,
              instagram: poi.instagram,
              manager: '66df05983359d01987f49a5e',
              imagenes: poi.imagenes.map(imagen => ({
                url: imagen.url
              }))
            })
    
            return hotel.save()
          })
    
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

cron.schedule('10 16 * * *', () => {
  // console.log('Ejecutando tarea programada: Llenado de base de datos con datos de la API externa');
  apiData();
});

export default apiData