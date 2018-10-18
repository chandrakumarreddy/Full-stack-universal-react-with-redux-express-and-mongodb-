import { combineReducers } from "redux";
import addTodos from "./addTodos";

export default combineReducers({
	addTodo: addTodos
});
