import './Home.css'
import Header from '../core/Header'
import TopBar from '../library/TopBar'

import RoomList from '../library/RoomList'



function Home() {

  return <div>
    <div>
      <Header>
        <TopBar />
      </Header>
    </div>
    <div>
    <RoomList/>
    </div>
  </div>
}

export default Home