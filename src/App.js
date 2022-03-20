import './App.css';
import{ BrowserRouter, Routes, Route, Navigate }from 'react-router-dom'
import Login from './components/Login/Login';
import LoginCard from './components/Login/LoginCard';
import SignUpCard from './components/Login/SignUpCard';
import Dashboard from './components/Dashboard/Dashboard';
import ClassGrid from './components/ClassGrid/ClassGrid';
import ClassUI from './components/ClassUI/ClassUI';
import { useEffect,  } from 'react';
import axios from 'axios';
import { useDispatch ,useSelector } from 'react-redux';


function App() {
  const user=useSelector(state=>state.user)
  const dispatch=useDispatch();
  // const [user, setUser]=useState(
  const userLocal=JSON.parse(localStorage.getItem('user'));
useEffect(()=>{

  if(userLocal&&userLocal!="null")
  {
    axios.defaults.headers.common['Authorization'] = `JWT ${userLocal.token}`;
    dispatch({type:'LOGIN', payload:userLocal})
  }
},[dispatch]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard'/>}  ></Route>
      <Route  path='login' element={user!=="null"&&user.token!==''?<Navigate to='/dashboard'/>:<Login/>}>
        <Route index element={<LoginCard/>}/>
        <Route path='signup' element={<SignUpCard/>}/>
      </Route>
      <Route path='dashboard' element={user&&user.token!==''?<Dashboard/>:<Navigate to='/login'/>}>
        <Route index element={<ClassGrid/>}/>
        <Route path=':classId' element={<ClassUI/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
