import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { getBooks, addBook, deleteBook, updateBook } from "./actions/Books";
import reducer from "./reducers";
import React from "react";
import { render } from "react-dom";
import BookList from "./components/pages/BookList";
import { Provider } from "react-redux";
//middleware usage in redux

const middleware = [logger];

// step-01 define a store
const store = createStore(reducer, applyMiddleware(...middleware));

//step-04 listening to store and changes to state update
//store.subscribe(() => console.log("state from redux", store.getState()));

// Create opeartion in crud

render(
	<Provider store={store}>
		<BookList />
	</Provider>,
	document.getElementById("root")
);

store.dispatch(
	addBook([
		{
			_id: 1,
			title: "The man who knows infinity",
			desc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi mollitia quod nostrum, vel, neque vero odio in autem velit, distinctio, error. Provident, odio ea quod enim atque a tenetur mollitia.",
			price: 33.33
		},
		{
			_id: 2,
			title: "Brief answers to big questions",
			desc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, velit, quos. Praesentium minima nostrum, facilis aspernatur sint harum id consequatur molestiae eaque a numquam modi quam libero dicta, quae, et.",
			price: 55.5
		}
	])
);
