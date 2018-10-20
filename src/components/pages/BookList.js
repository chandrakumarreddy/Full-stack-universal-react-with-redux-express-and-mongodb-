import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Button } from "react-bootstrap";
import BookItem from "./BookItem";
import BookForm from "./BookForm";
import CartItem from "./CartItem";

const renderBooks = function(books) {
	if (books) {
		return books.map(item => (
			<Col xs={12} sm={6} md={4} key={item._id}>
				<BookItem
					_id={item._id}
					title={item.title}
					desc={item.desc}
					price={item.price}
				/>
			</Col>
		));
	}
};

const BookList = props => {
	return (
		<Grid>
			<Row>
				<CartItem />
			</Row>
			<Row>
				<Col xs={12} sm={12} md={6}>
					<BookForm />
				</Col>
				{renderBooks(props.books.books)}
			</Row>
		</Grid>
	);
};

export default connect(state => ({ books: state.books }))(BookList);
