import 'dotenv/config'
import fetch from 'node-fetch'
import { Room } from '../data/index.js'

const { API_VQ } = process.env

const apiData = () => {
  return fetch(API_VQ)
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
              manager: '66d878adbb0fb67868b4bfc1',
              imagenes: poi.imagenes.map(imagen => ({ url: imagen.url })),
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
}

export default apiData