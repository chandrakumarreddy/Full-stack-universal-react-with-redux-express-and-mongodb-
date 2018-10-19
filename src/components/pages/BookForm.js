import React from "react";
import {
	Panel,
	Well,
	FormControl,
	FormGroup,
	ControlLabel,
	Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { addBook } from "../../actions/Books";

class BookForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			desc: "",
			price: ""
		};
	}
	handleChange = e => this.setState({ [e.target.name]: e.target.value });
	handleSubmit = e => {
		e.preventDefault();
		this.props.postData([this.state]);
	};
	render() {
		return (
			<Well>
				<Panel>
					<form
						style={{ padding: "20px" }}
						onSubmit={this.handleSubmit.bind(this)}
					>
						<FormGroup controlId="title">
							<ControlLabel>Title</ControlLabel>
							<FormControl
								type="text"
								placeholder="Title"
								value={this.state.title}
								name="title"
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup controlId="description">
							<ControlLabel>Description</ControlLabel>
							<FormControl
								type="text"
								placeholder="Description"
								value={this.state.desc}
								name="desc"
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup controlId="price">
							<ControlLabel>Price</ControlLabel>
							<FormControl
								type="text"
								placeholder="Price"
								name="price"
								value={this.state.price}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<Button type="submit" bsStyle="primary">
							Save Book
						</Button>
					</form>
				</Panel>
			</Well>
		);
	}
}

export default connect(
	null,
	dispatch => ({ postData: data => dispatch(addBook(data)) })
)(BookForm);
