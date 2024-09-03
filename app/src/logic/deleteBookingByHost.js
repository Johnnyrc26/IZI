import errors, { SystemError } from 'com/errors'
import validate from 'com/validate'

const deleteBookingByHost = (userId, roomId, bookingId) => {
  validate.id(userId, 'userId')
  validate.id(roomId, 'roomId')
  validate.id(bookingId, 'bookingId')

  return fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}/manage/booking`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ bookingId })
  })

    .catch(() => { throw new SystemError('network error') })
    .then(response => {
      if (response.status === 204) return

      return response.json()
        .catch(() => { throw new SystemError('network error') })
        .then(body => {
          const { error, message } = body

          const constructor = errors[error]

          throw new constructor(message)
        })
    })
}

export default deleteBookingByHost