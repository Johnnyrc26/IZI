import { useState, useEffect } from "react"
import logic from "../../../logic/index"
import { useNavigate } from "react-router-dom"
import SearchBar from "../library/SearchBar"

function RoomList() {
  const [rooms, setRooms] = useState([])
  const [filteredRooms, setFilteredRooms] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const roomsPerPage = 5
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoggedIn(logic.isUserLoggedIn())
  }, [])

  useEffect(() => {
    logic.getAllRooms()
      .then((rooms) => {
        setRooms(rooms)
        setFilteredRooms(rooms)
      })
      .catch(error => alert(error.message))
  }, [])

  useEffect(() => {
    const filtered = rooms.filter(room =>
      room.nameRoom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.city.toLowerCase().includes(searchQuery.toLowerCase())
    )
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

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className='Container'>
      <SearchBar onSearch={handleSearch} />
      <section className='SectionCard'>
        <ul className="Grid">
          {currentRooms.map(room => (
            <li className='Card' key={room.id}>
              <div className="Img">
                <img src={room.image} alt='ImgRoom' className='Image' />
              </div>
              <div className='InfoCard'>
                <div className="InfoCardLeft">
                  <p className="nameRoom">{room.nameRoom}</p>
                  <p className="city">{room.city}</p>
                  <p className="descriptionRoom">{room.description}</p>
                </div>
                <div className="InfoCardRight">
                  <div className='Price'>
                    <p className="ppn">Precio por noche</p>
                    <p className="priceRoom">{room.price}</p>
                  </div>
                </div>
              </div>
              <div className='LinkTo'>
                <button onClick={() => handleReserveClick(room.id)}>Reservar</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
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