import React from 'react'
import {  Outlet } from 'react-router-dom'
import './login.css'

function Login() {
  

  return (
    <div className='container login-container'>
      {/* <div className='card' >
      <div className='card-body'>
        <div></div>
      </div>
      </div> */}
   
   <div className='card login-card'>

      <Outlet/>
      </div>
      </div>
      )
}

export default Login