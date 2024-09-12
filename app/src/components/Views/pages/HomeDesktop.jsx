import { useState } from "react"
import Header from '../core/Header'
import TopBar from '../library/TopBar'
import SearchBar from "../library/SearchBar"

function HomeDesktop() {
  const [rooms, setRooms] = useState()

  return (
    <>
      <div className="TopBar">
        <Header>
          <TopBar />
        </Header>
      </div>

      <div className="SearchBar">
        <SearchBar />
      </div>

      <div className="Regions">

        <section>

          <a>
            <img />
          </a>

          <a>
            <img />
          </a>

          <a>
            <img />
          </a>

          <a>
            <img />
          </a>

        </section>

      </div>

      <div className="RoomList">
        <section>
          <ul className="Grid">

            <li className="Card">
              <div className="Img">
                <img

                />
              </div>

              <div className="InfoCard">
                <div className="InfoLeft">

                </div>

                <div className="InfoRight">

                </div>
              </div>
              <div className="GoToBooking">
                <button></button>
              </div>
            </li>

          </ul>
        </section>
      </div>

      <div>
      //Ads
      </div>

      <div>
        //Footer
      </div>

    </>
  )
}