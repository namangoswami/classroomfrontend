import { UPDATE_CLASSES, LOGIN, LOGOUT, ADD_CLASS } from "./userTypes";
const initialState={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    token:'',
    classes:[],
    elevation:0
}
const userReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case LOGIN:return {classes:[],...action.payload};
        case LOGOUT:return initialState;
        case ADD_CLASS:return({...state,classes: [...state.classes, action.payload]});
        case UPDATE_CLASSES:return({...state, classes:action.payload});
        default: return state;
    }
}
export default userReducer;