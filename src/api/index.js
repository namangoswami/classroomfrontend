import axios from 'axios';

const url='https://classroom-backend-naman.herokuapp.com';

export const login=(user)=>axios.post(url+'/login',{...user} );

export const getClass=(classId)=>axios.post(url+'/class',{classId:classId});
export const addStudent=(obj)=>axios.post(url+'/class/addStudent', obj);
export const addDoc=(obj)=>axios.post(url+'/class/addDoc', obj);
export const updateClass=(classObj)=>axios.post(url+'/class/updateClass', {classObj:classObj})

export const getClasses=(_id)=>axios.get(url+'/user/getClasses', {_id});