import {ADD_STUDENT,ADD_DATA,UPDATE_CURRENT} from './classesTypes';

const initialState={
    _id:'',
    teacher:'',
    className:'',
    section:'',
    subject:'',
    students:[],
    data:[{type:'', content:''}]
};

const classReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case ADD_STUDENT:
                return {...state, students:[...state.students, action.payload]};
        case ADD_DATA: 
                return {...state, data:[...state.data, action.payload]};
        case UPDATE_CURRENT:
                return action.payload;
        default: return state;
    }
}

export default classReducer;
