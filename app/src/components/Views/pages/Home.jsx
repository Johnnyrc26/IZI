import React from 'react'
import Header from '../core/Header'
import TopBarHome from '../library/Desktop/TopBarHome' 
import RoomList from '../library/RoomList'

function Home() {
  return (
    <div>
      <div>
        <Header>
          <TopBarHome />
        </Header>
      </div>
      <div>
        <RoomList />
      </div>
    </div>
  );
}

export default Home;