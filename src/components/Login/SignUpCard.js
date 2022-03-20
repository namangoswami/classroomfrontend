import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem} from "@mui/material";

function LoginCard() {
    const [user, setUser]=useState({
        email:'',
        password:''
      })
      // const pageState=useState({
      //   login:true
      // })
      const handleSubmit=()=>{
        console.log(user);
      }
  const handleChange=(e)=>{setUser({...user,[e.target.name]:e.target.value})}
      const navigation=useNavigate();
    return (
<><div className='card-header'>
          <div className='heading'>
          <h1>SignUp</h1>
          </div>
        </div>
        <div className='card-body'>
          <div className='form-group' >
      <input className='' name='email' value={user.email} onChange={handleChange} ></input>
          </div>
          <div className='form-group' >
      <input className='' name='password' type='password' value={user.password} onChange={handleChange}></input>
          </div><div className='form-group' >
      <input className='' name='password' type='password' value={user.password} onChange={handleChange}></input>
          </div><div className='form-group' >
      <input className='' name='password' type='password' value={user.password} onChange={handleChange}></input>
          </div><div className='form-group' >
      <input className='' name='password' type='password' value={user.password} onChange={handleChange}></input>
          </div>
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={0}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={0}>Ten</MenuItem>
    <MenuItem value={1}>Twenty</MenuItem>
  </Select>
</FormControl>
        </div>
          <div className='card-footer'>
            <button className='button button-secondary' type='button' onClick={()=>{navigation('/login', {replace:true})}}>Login</button>
            <button className='button button-primary' type='button' onClick={handleSubmit}>Sign Up</button>
          </div>
      </>
  )
}

export default LoginCard