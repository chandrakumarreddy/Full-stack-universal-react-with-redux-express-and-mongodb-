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
import { addBook, deleteBook } from "../../actions/Books";

class BookForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			desc: "",
			price: "",
			value: ""
		};
		this.delete = React.createRef();
	}
	handleChange = e => this.setState({ [e.target.name]: e.target.value });
	handleSubmit = e => {
		e.preventDefault();
		this.props.postData([this.state]);
	};
	onDelete = () => {
		this.props.deleteItem(this.state.value);
	};

	render() {
		const booksList = this.props.books.map(item => (
			<option value={item._id} key={item._id}>
				{item._id}
			</option>
		));
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
				<Panel style={{ padding: "15px" }}>
					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Select a book id to delete</ControlLabel>
						<FormControl
							onChange={this.handleChange}
							componentClass="select"
							placeholder="select"
							name="value"
						>
							<option value="select">select</option>
							{booksList}
						</FormControl>
					</FormGroup>
					<Button onClick={this.onDelete.bind(this)} bsStyle="danger">
						Delete book
					</Button>
				</Panel>
			</Well>
		);
	}
}

export default connect(
	state => ({ books: state.books.books }),
	dispatch => ({
		postData: data => dispatch(addBook(data)),
		deleteItem: id => dispatch(deleteBook(id))
	})
)(BookForm);
