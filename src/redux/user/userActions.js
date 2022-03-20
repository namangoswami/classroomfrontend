import axios from 'axios';
import * as api from '../../api';
import { ADD_CLASS, LOGIN, LOGOUT, UPDATE_CLASSES } from './userTypes';

export const login=(user, navigation)=>async (dispatch)=>{
    try {
        const {data}=await api.login(user);
        axios.defaults.headers.common['Authorization'] = `JWT ${data.user.token}`;
        localStorage.setItem('user', JSON.stringify(data.user))
        dispatch({type:LOGIN, payload:data.user});
        console.log(data);
        return true;
    } catch (error) {
        console.log(error.message);
    }
}
export const logout=()=>async (dispatch)=>{
    try{
        localStorage.removeItem('user');
        dispatch({type:LOGOUT});
    }
    catch(error)
    {
        console.log(error)
    }
}
export const addClass=(classObj)=>async(dispatch)=>{
    try {
        console.log(classObj)
        await api.updateClass(classObj);
        dispatch({type:ADD_CLASS, payload:classObj})
    
    } catch (error) {
        console.log(error);
    }
}
export const getClasses=(_id)=>async(dispatch)=>{
    try {
        console.log('in')
        const {data}=await api.getClasses(_id);
        console.log(data);
        dispatch({type:UPDATE_CLASSES, payload:data.classObjAr})
    } catch (error) {
        console.log(error);
    }
}