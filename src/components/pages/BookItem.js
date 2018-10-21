import React from "react";
import { connect } from "react-redux";
import { Col, Well, Button, Row } from "react-bootstrap";
import { addToCart, updateCart } from "../../actions/Books";

class BookItem extends React.Component {
	handleBuy = () => {
		const book = [
			{
				_id: this.props._id,
				title: this.props.title,
				description: this.props.description,
				price: this.props.price,
				quantity: 1
			}
		];
		if (this.props.cart.length > 0) {
			let item = null;
			for (let i = 0; i < this.props.cart.length; i++) {
				if (this.props.cart[i]._id === this.props._id) {
					item = this.props._id;
					break;
				}
			}
			if (item) {
				this.props.updateItem({ id: item, qty: 1 });
			} else {
				this.props.addItem(book);
			}
		} else {
			this.props.addItem(book);
		}
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
	dispatch => ({
		addItem: book => dispatch(addToCart(book)),
		updateItem: id => dispatch(updateCart(id))
	})
)(BookItem);
