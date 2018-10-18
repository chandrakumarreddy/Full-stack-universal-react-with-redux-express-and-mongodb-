import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { addTodo, deleteTodo, updateTodo } from "./actions/Todos";
import reducer from "./reducers";
import React from "react";
import { render } from "react-dom";
import BookList from "./components/pages/BookList";
//middleware usage in redux

const middleware = [logger];

// step-01 define a store
const store = createStore(reducer, applyMiddleware(...middleware));

//step-04 listening to store and changes to state update
store.subscribe(() => console.log("state from redux", store.getState()));

// Create opeartion in crud

render(<BookList />, document.getElementById("root"));

store.dispatch(
	addTodo([
		{
			_id: 1,
			name: "GYM",
			month: "NOVEMBER",
			complete: false
		},
		{
			_id: 2,
			name: "STUDIES",
			month: "NOVEMBER",
			complete: false
		}
	])
);

store.dispatch(
	addTodo([
		{
			_id: 3,
			name: "MEDITATE",
			month: "NOVEMBER",
			complete: false
		}
	])
);

// Deleting item in state

store.dispatch(deleteTodo(3));

store.dispatch(deleteTodo(2));

// update opration in crud

store.dispatch(
	updateTodo({
		_id: 1,
		name: "Sports"
	})
);
