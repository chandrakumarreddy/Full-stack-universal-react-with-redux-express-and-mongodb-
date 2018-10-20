import React from "react";
import { connect } from "react-redux";
import {
	Well,
	Panel,
	Row,
	Col,
	Button,
	Grid,
	Label,
	ButtonGroup
} from "react-bootstrap";
import { deleteFromCart } from "../../actions/Books";

class CartItem extends React.Component {
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
							<h6>qty.</h6>
						</Col>
						<Col xs={6} sm={4}>
							<ButtonGroup style={{ minWidth: "300px" }}>
								<Button bsStyle="default" bsSize="small">
									-
								</Button>
								<Button bsStyle="default" bsSize="small">
									+
								</Button>
								<span />
								<Button
									bsStyle="danger"
									bsSize="small"
									onClick={this.deleteItem.bind(
										this,
										item._id
									)}
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
			<Grid>
				<Panel header="Cart" bsStyle="primary">
					<Panel.Heading>
						<Panel.Title>Cart</Panel.Title>
					</Panel.Heading>
					<Panel.Body>{this.renderItems()}</Panel.Body>
				</Panel>
			</Grid>
		);
	}
}

export default connect(
	state => ({ cart: state.cart.cart }),
	dispatch => ({
		deleteCartItem: id => dispatch(deleteFromCart(id))
	})
)(CartItem);
