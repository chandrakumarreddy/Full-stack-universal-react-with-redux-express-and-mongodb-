import React from "react";
import { connect } from "react-redux";
import { Well, Panel, Row, Col, Button, Grid } from "react-bootstrap";

class CartItem extends React.Component {
	renderItems = () => {
		console.log(this.props.cart);
		if (this.props.cart[0]) {
			return this.props.cart.map(item => (
				<Well key={item.id}>
					<Row>
						<Col xs={12} sm={4}>
							<h6 style={{ margin: 0 }}>{item.title}</h6>
						</Col>
					</Row>
				</Well>
			));
		}
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

export default connect(state => ({ cart: state.cart.cart }))(CartItem);
