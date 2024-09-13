import 'dotenv/config'
import fetch from 'node-fetch'
import { Room } from '../data/index.js'

const { API_VQ } = process.env

const construirUrl = (estado) => {
  const categoria = 'para-dormir'
  const estadoCodificado = encodeURIComponent(estado)
  return `${API_VQ}/${estadoCodificado}/${categoria}`
}


const regiones = {
  'Distrito Capital': 'Norte',
  'Miranda': 'Norte',
  'Aragua': 'Norte',
  'Carabobo': 'Norte',
  'Zulia': 'Norte',
  'Falcón': 'Norte',
  'Yaracuy': 'Norte',
  'Territorio Insular': 'Norte',
  'Bolívar': 'Sur',
  'Amazonas': 'Sur',
  'Apure': 'Sur',
  'Anzoátegui': 'Este',
  'Monagas': 'Este',
  'Sucre': 'Este',
  'Nueva Esparta': 'Este',
  'Delta Amacuro': 'Este',
  'Táchira': 'Oeste',
  'Mérida': 'Oeste',
  'Trujillo': 'Oeste',
  'Barinas': 'Oeste',
  'Lara': 'Oeste',
  'Portuguesa': 'Oeste',
  'Cojedes': 'Oeste',
  'Guárico': 'Oeste',
}

const obtenerRegion = (estado) => {
  return regiones[estado] || 'Región no especificada'
}

const procesarEstado = (estado) => {
  const url = construirUrl(estado)
  const region = obtenerRegion(estado)

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error de red al intentar conectar con la API para ${estado}`)
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
              region: region,
              telefono: poi.telefono,
              url: poi.url,
              email: poi.email,
              latitud: poi.latitud,
              longitud: poi.longitud,
              facebook: poi.facebook,
              twitter: poi.twitter,
              instagram: poi.instagram,
              manager: '66d878adbb0fb67868b4bfc1',
              imagenes: poi.imagenes.map(imagen => ({
                url: imagen.url
              })),
            })

            return hotel.save()
          })
      })

      return Promise.all(savePromises)
    })
    .then(() => {
      console.log(`Datos de ${estado} guardados correctamente en la base de datos`)
    })
    .catch(error => {
      console.error(`Error al procesar los datos de ${estado}:`, error)
    })
}

const estados = [
  'Distrito Capital',
  'Miranda',
  'Aragua',
  'Carabobo',
  'Zulia',
  'Falcón',
  'Yaracuy',
  'Territorio Insular',
  'Bolívar',
  'Amazonas',
  'Apure',
  'Anzoátegui',
  'Monagas',
  'Sucre',
  'Nueva Esparta',
  'Delta Amacuro',
  'Táchira',
  'Mérida',
  'Trujillo',
  'Barinas',
  'Lara',
  'Portuguesa',
  'Cojedes',
  'Guárico'
]

const apiData = () => {
  const promises = estados.map(estado => procesarEstado(estado))

  return Promise.all(promises)
    .then(() => {
      console.log('Todos los datos han sido guardados correctamente.')
    })
    .catch(error => {
      console.error('Error al procesar algunos estados:', error)
    })
}

export default apiData