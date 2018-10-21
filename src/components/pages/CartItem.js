import React from "react";
import { connect } from "react-redux";
import {
	Well,
	Panel,
	Row,
	Col,
	Button,
	Label,
	ButtonGroup,
	Modal
} from "react-bootstrap";
import { deleteFromCart, updateCart } from "../../actions/Books";

class CartItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	renderItems = () => {
		if (this.props.cart[0]) {
			return this.props.cart.map(item => (
				<Well key={item._id}>
					<Row>
						<Col xs={12} sm={4}>
							<h6>{item.title}</h6>
						</Col>
						<Col xs={12} sm={2}>
							<h6>
								usd.&nbsp;
								{item.price}
							</h6>
						</Col>
						<Col xs={12} sm={2}>
							<h6>
								qty.{" "}
								<Label bsStyle="primary">{item.quantity}</Label>
							</h6>
						</Col>
						<Col xs={6} sm={4}>
							<ButtonGroup style={{ minWidth: "300px" }}>
								<Button
									bsStyle="default"
									bsSize="small"
									onClick={() =>
										this.props.updateItem({
											id: item._id,
											qty: -1
										})
									}
								>
									-
								</Button>
								<Button
									bsStyle="default"
									bsSize="small"
									onClick={() =>
										this.props.updateItem({
											id: item._id,
											qty: 1
										})
									}
								>
									+
								</Button>
								<span />
								<Button
									bsStyle="danger"
									bsSize="small"
									onClick={() => this.deleteItem(item._id)}
								>
									DELETE
								</Button>
							</ButtonGroup>
						</Col>
					</Row>
				</Well>
			));
		}
	};
	deleteItem = id => {
		this.props.deleteCartItem(id);
	};

	render() {
		return (
			<Panel header="Cart" bsStyle="primary">
				<Panel.Heading>
					<Panel.Title>Cart</Panel.Title>
				</Panel.Heading>
				<Panel.Body>{this.renderItems()}</Panel.Body>
				<Panel.Footer>
					<h6>
						Total amount :- usd.
						{this.props.cartTotal}
					</h6>
					<Button bsStyle="success" onClick={this.handleShow}>
						Proceed to checkout
					</Button>
				</Panel.Footer>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Thank you!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h6>Thanks for ordering</h6>
						<p>
							You will receive email for once order is confirmed
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Close</Button>
					</Modal.Footer>
				</Modal>
			</Panel>
		);
	}
}

export default connect(
	state => ({ cart: state.cart.cart, cartTotal: state.cart.totalPrice }),
	dispatch => ({
		deleteCartItem: id => dispatch(deleteFromCart(id)),
		updateItem: id => dispatch(updateCart(id))
	})
)(CartItem);
