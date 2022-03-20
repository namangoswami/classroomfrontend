import * as api from '../../api'
import { ADD_DATA, ADD_STUDENT, UPDATE_CURRENT } from './classesTypes';

export const getClass=(classId)=>async (dispatch)=>{
    try {
        // console.log(classId);
        const {data}=await api.getClass(classId);
        dispatch({type:UPDATE_CURRENT, payload:data.classObj})
    } catch (error) {
        console.log(error);
    }
}

export const addStudent=(student, classId)=>async (dispatch)=>{
    try{
        await api.addStudent({student, classId});
        dispatch({type:ADD_STUDENT, payload:student})
    }
    catch(err){
        console.log(err);
    }
}
export const addDoc=(doc, classId)=>async(dispatch)=>{
    try {
        // console.log(classId);
         api.addDoc({ doc, classId});
        dispatch({type:ADD_DATA, payload:doc})
    } catch (error) {
        console.log(error);
    }
}