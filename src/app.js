import { createStore } from "redux";
import { addTodo, deleteTodo, updateTodo } from "./actions/Todos";
import reducer from "./reducers";
// step-03 define a reducer

// step-01 define a store
const store = createStore(reducer);

//step-04 listening to store and changes to state update
store.subscribe(() => console.log("state from redux", store.getState()));

// step-02  create an action and dispatch a store

// Create opeartion in crud

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
