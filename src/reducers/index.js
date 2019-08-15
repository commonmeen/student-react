import { combineReducers } from "redux";
import StudentReducer from './StudentReducer'
import StudentList from "../components/StudentList";


const rootReducer = combineReducers({
    student:StudentReducer,
    list:StudentList
})

export default rootReducer
