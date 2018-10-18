import { createStore } from "redux";

// step-03 define a reducer
const reducer = function(state = 0, action) {
	switch (action.type) {
		case "ADD_TODO":
			return state + action.payload;
		default:
			return state;
	}
};

// step-01 define a store
const store = createStore(reducer);

//step-04 listening to store and changes to state update
store.subscribe(() => console.log("state from redux", store.getState()));

// step-02  create an action and dispatch a store
store.dispatch({ type: "ADD_TODO", payload: 1 });
store.dispatch({ type: "ADD_TODO", payload: 1 });
store.dispatch({ type: "ADD_TODO", payload: 1 });
