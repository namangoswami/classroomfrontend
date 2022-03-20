import {combineReducers} from 'redux'

import classesReducer from './classes/classesReducer';
import userReducer from './user/userReducer';

const rootReducer=combineReducers({
    class:classesReducer,
    user:userReducer
});

export default rootReducer;