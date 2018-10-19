import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Button } from "react-bootstrap";
import BookItem from "./BookItem";

const renderBooks = function(books) {
	if (books) {
		return books.map(item => (
			<Col xs={12} sm={6} md={4} key={item._id}>
				<BookItem
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
			<Row>{renderBooks(props.books.books)}</Row>
		</Grid>
	);
};

export default connect(state => ({ books: state.books }))(BookList);
