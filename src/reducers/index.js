import { combineReducers } from "redux";
import books from "./Books";
import cart from "./Cart";

export default combineReducers({
	books,
	cart
});
