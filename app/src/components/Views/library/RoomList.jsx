import { useState, useEffect } from "react"
import logic from "../../../logic/index"
import { useNavigate } from "react-router-dom"
import SearchBar from "../library/SearchBar"
import Banner from '../library/Desktop/Banner'

function RoomList() {
  const [rooms, setRooms] = useState([])
  const [filteredRooms, setFilteredRooms] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const roomsPerPage = 8
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoggedIn(logic.isUserLoggedIn())
  }, [])

  useEffect(() => {
    logic.getAllRooms()
      .then((rooms) => {
        setRooms(rooms)
      })
      .catch(error => alert(error.message))
  }, [])

  useEffect(() => {

    const filtered = [
      ...rooms.filter(room =>
        room.nameRoom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.city.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ]
    setFilteredRooms(filtered)
    setCurrentPage(1)
  }, [searchQuery, rooms])

  const indexOfLastRoom = currentPage * roomsPerPage
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom)

  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleReserveClick = (roomId) => {
    if (!isLoggedIn) {
      navigate('/login')
    } else {
      navigate(`/create-booking/${roomId}`)
    }
  }

  return (

    <div className='Contenedor'>
            <p className="TitleHome ">Tú eliges dónde comienza la aventura.</p>

      <section className="SectionCard">
        <ul className="Grid">
          {currentRooms.map((room) => (
            <li
              className="Card"
              key={room.id}
              onClick={() => handleReserveClick(room.id)} 
            >
              <div className="Img">
                <img
                  src={room.image || (room.imagenes && room.imagenes[0]?.url)}
                  alt="ImgRoom"
                  className="Image"
                />
              </div>
              <div className="InfoCard">
                <div className="InfoCardLeft">
                  <p className="nameRoom">{room.nameRoom}</p>
                  <p className="city">{room.city}</p>
                  <p className="region">{room.region}</p>
                  <p className="descriptionRoom">
                    {room.description || 'Descripción no disponible'}
                  </p>
                </div>
                <div className="InfoCardRight">
                  <div className="Price">
                    <p className="ppn">Precio por noche</p>
                    <p className="priceRoom">{room.price || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Banner></Banner>

      <div className='Pagination'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default RoomList