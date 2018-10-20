import React from "react";
import { connect } from "react-redux";
import { Col, Well, Button, Row } from "react-bootstrap";
import { addToCart } from "../../actions/Books";

class BookItem extends React.Component {
	handleBuy = () => {
		const book = [
			{
				id: this.props.id,
				title: this.props.title,
				description: this.props.description,
				price: this.props.price
			}
		];
		this.props.addItem(book);
	};
	render() {
		return (
			<Well>
				<Row>
					<Col xs={12}>
						<h6>{this.props.title}</h6>
						<p>{this.props.desc}</p>
						<h6>USD. {this.props.price}</h6>
						<Button bsStyle="primary" onClick={this.handleBuy}>
							Buy now
						</Button>
					</Col>
				</Row>
			</Well>
		);
	}
}

export default connect(
	state => ({ cart: state.cart.cart }),
	dispatch => ({ addItem: book => dispatch(addToCart(book)) })
)(BookItem);
