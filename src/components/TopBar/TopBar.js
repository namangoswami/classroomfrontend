import React, { useEffect, useState } from 'react'
import './topBar.css'
import {Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/userActions';
function TopBar() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [currentTime, setTime]=useState(new Date());
    useEffect(()=>{
        const Timer=setInterval(()=>{setTime(new Date());}, 1000);
        return ()=>{clearInterval(Timer);}
    })
    const currentTimeObj={
        hour:currentTime.getHours(),
        minutes:currentTime.getMinutes(),
        day:currentTime.getDay()
    }
    const params=useParams();
    const classId=params.classId;
    const classObj=useSelector(state=>state.class)
    const navigation=useNavigate();
    const dispatch=useDispatch();
    const handleLogout=()=>{
        dispatch(logout()); 
        navigation('/login');
    }
  return (
    <div className="top-bar-container">
        <div className="top-bar">
            <div>
              
                <span className="heading-small">{classId?(classId===classObj._id)?classObj.className:'':'Dashboard'}</span>
            
            </div>
            <div><span className="heading-small">{(currentTimeObj.hour>12?currentTimeObj.hour%12:currentTimeObj.hour)}:{currentTimeObj.minutes<10?'0'+currentTimeObj.minutes:currentTimeObj.minutes} {currentTimeObj.hour>=12?'PM':'AM'}, {days[currentTimeObj.day]}</span></div>
            <div><Button variant='outlined' color='error' onClick={()=>handleLogout()}>Log Out</Button></div>
        </div>

    </div>
  )
}

export default TopBar