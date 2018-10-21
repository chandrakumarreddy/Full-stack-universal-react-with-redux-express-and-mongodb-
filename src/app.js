import { applyMiddleware, createStore } from "redux";
import { getBooks, addBook, deleteBook, updateBook } from "./actions/Books";
import reducer from "./reducers";
import React from "react";
import { render } from "react-dom";
import BookList from "./components/pages/BookList";
import Menu from "./components/pages/Menu.js";
import Footer from "./components/pages/Footer";
import { Provider } from "react-redux";
//middleware usage in redux

const middleware = [];

// step-01 define a store
const store = createStore(reducer, applyMiddleware(...middleware));

//step-04 listening to store and changes to state update
//store.subscribe(() => console.log("state from redux", store.getState()));

// Create opeartion in crud

render(
	<Provider store={store}>
		<div>
			<Menu />
			<BookList />
			<Footer />
		</div>
	</Provider>,
	document.getElementById("root")
);

store.dispatch(addBook());
