import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'


const App = () => {
    const [ selectedSidebarIcon, setSelectedSidebarIcon ] = useState(1);
  return (
    <div>
        <Navbar />
      <div className='homePage'>
        <Sidebar selectedSidebarIcon={selectedSidebarIcon} setSelectedSidebarIcon={setSelectedSidebarIcon} />
        {/* 
        <div className="feed"></div>
        */}
      </div>
    </div>
  )
}

export default App
