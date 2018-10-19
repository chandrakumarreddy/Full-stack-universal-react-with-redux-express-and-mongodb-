import React from "react";
import { Col, Well, Button, Row } from "react-bootstrap";

const BookItem = props => {
	return (
		<Well>
			<Row>
				<Col xs={12}>
					<h6>{props.title}</h6>
					<p>{props.desc}</p>
					<h6>USD. {props.price}</h6>
					<Button bsStyle="primary">Buy now</Button>
				</Col>
			</Row>
		</Well>
	);
};

export default BookItem;
