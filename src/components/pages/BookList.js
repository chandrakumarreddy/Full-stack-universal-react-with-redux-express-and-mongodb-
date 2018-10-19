import React from "react";
import { connect } from "react-redux";

const renderBooks = function(books) {
	if (books) {
		return books.map(item => (
			<div key={item._id}>
				<div>Name :- {item.name}</div>
				<div>Month :- {item.month}</div>
				<div>complete :- {item.complete}</div>
			</div>
		));
	}
};

const BookList = props => {
	return <div>{renderBooks(props.books.books)}</div>;
};

export default connect(state => ({ books: state.addTodo }))(BookList);
