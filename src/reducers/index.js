import todoReducers from "./ToDoReducers";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;