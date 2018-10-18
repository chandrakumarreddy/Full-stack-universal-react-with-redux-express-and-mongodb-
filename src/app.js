import { createStore } from "redux";

// step-03 define a reducer
const reducer = function(state = { books: [] }, action) {
	switch (action.type) {
		case "ADD_TODO":
			return { ...state, books: [...state.books, ...action.payload] };
		default:
			return state;
	}
};

// step-01 define a store
const store = createStore(reducer);

//step-04 listening to store and changes to state update
store.subscribe(() => console.log("state from redux", store.getState()));

// step-02  create an action and dispatch a store
store.dispatch({
	type: "ADD_TODO",
	payload: [
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
	]
});

store.dispatch({
	type: "ADD_TODO",
	payload: [
		{
			_id: 3,
			name: "MEDITATE",
			month: "NOVEMBER",
			complete: false
		}
	]
});
