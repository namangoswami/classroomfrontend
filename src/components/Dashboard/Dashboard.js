import React from 'react'
import TopBar from '../TopBar/TopBar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    
  return (
    <div className="container">
        <TopBar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard